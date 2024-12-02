export default function generateID() {
  let out = ''
  for (let i = 0; i < 16; i++) {
    out += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'[Math.floor(Math.random() * 36)]
  }
  return out;
}