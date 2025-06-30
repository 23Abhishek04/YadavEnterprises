/** @type {import('next').NextConfig} */
const nextConfig = {
  api: {
    bodyParser: false, // ✅ Needed for file uploads via Formidable
  },
};

module.exports = nextConfig;
