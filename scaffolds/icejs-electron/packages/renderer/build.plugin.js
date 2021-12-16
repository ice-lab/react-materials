module.exports = ({ onHook }) => {
  onHook('after.start.devServer', ({ devServer }) => {
    const protocol = `http${devServer.config.server.https ? 's' : ''}:`;
    const host = devServer.config.server.host || 'localhost';
    const { port } = devServer.config.server;
    const path = '/';
    process.env.RENDERER_DEV_SERVER_URL = `${protocol}//${host}:${port}${path}`;
  });
};
