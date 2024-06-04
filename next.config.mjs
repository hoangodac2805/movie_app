/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        apiHost:"https://api.themoviedb.org/3/",
        apiKey: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTliZGZkYTFkN2E2OWViNjIwZWViZjk0NDhmOTQzYiIsInN1YiI6IjY1ZWVjMzc1ZTcyZmU4MDE4NTVjMmIxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d2W2zgsIfQTNnoH8xgbTUFPdeOS0kkzPnFSxl_tXVC8",
        imgHost:"https://image.tmdb.org/t/p/w1280"
    },
    images: { domains: ['image.tmdb.org']}
};

export default nextConfig;
