export default function (api) {
  api.cache(true)

  const presets = ['@babel/preset-env', '@babel/preset-react']
  // Add any other Babel configuration options if needed

  return {
    presets,
  }
}
