const Listing = require('../models/Airbnb')

const getListings = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query; // Default to page 1 and limit 10

        // Convert to numbers for pagination
        const pageNumber = parseInt(page, 10);
        const limitNumber = parseInt(limit, 10);

        // Fetch listings with pagination
        const listings = await Listing.find()
            .skip((pageNumber - 1) * limitNumber)
            .limit(limitNumber);

        // Count total documents
        const totalListings = await Listing.countDocuments();

        res.status(200).json({
            totalListings,
            totalPages: Math.ceil(totalListings / limitNumber),
            currentPage: pageNumber,
            listings,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching listings', error: error.message });
    }
};


module.exports = { getListings }