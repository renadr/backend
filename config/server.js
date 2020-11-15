module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      url: '/dashboard',
      secret: env('ADMIN_JWT_SECRET', 'bf2a9cc1af8069cf9523c64fb7a00dc3'),
    },
  },
});
