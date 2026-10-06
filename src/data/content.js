// ============================================================
//  ALL EDITABLE CONTENT LIVES IN THIS FILE.
//  Images: put files in /public/images and use "/images/name.jpg".
//  Audio : put files in /public/audio and use "/audio/name.mp3".
// ============================================================

export const site = {
  brand: 'PASAN MUSIC',
  name: 'Pasan Mahela',
  roles: 'Music Director · Producer · Composer',
  tagline: 'I turn ideas into sound.',
  email: 'hello@example.com',          // REPLACE: your email
  whatsapp: '94700000000',             // REPLACE: number, country code, no + or spaces
  waMessage: "Hi Pasan, I'd like to talk about a music project.",
}

export const socials = [                // REPLACE: every href
  { name: 'YouTube',   handle: '@pasanmusic', href: 'https://youtube.com/@yourchannel' },
  { name: 'Instagram', handle: '@pasanmusic', href: 'https://instagram.com/yourhandle' },
  { name: 'Spotify',   handle: 'Pasan Mahela', href: 'https://open.spotify.com/artist/your-id' },
  { name: 'TikTok',    handle: '@pasanmusic', href: 'https://tiktok.com/@yourhandle' },
  { name: 'WhatsApp',  handle: 'Message directly', href: `https://wa.me/${site.whatsapp}` },
]

// REPLACE: sample projects. cover = image URL ('' shows generated artwork). audio = mp3 URL.
export const projects = [
  { title: 'Midnight Raag', artist: 'Client / Artist Name', category: 'Production', cover: '', audio: '/audio/replace-me-1.mp3' },
  { title: 'Seeduwa Sunrise', artist: 'Client / Artist Name', category: 'Composition', cover: '', audio: '/audio/replace-me-2.mp3' },
  { title: 'Paper Lanterns', artist: 'Client / Artist Name', category: 'Vocal Production', cover: '', audio: '/audio/replace-me-3.mp3' },
  { title: 'Kandy Drive', artist: 'Brand / Radio Station', category: 'Jingle', cover: '', audio: '/audio/replace-me-4.mp3' },
  { title: 'Still Water', artist: 'Short Film Title', category: 'Music for Visuals', cover: '', audio: '/audio/replace-me-5.mp3' },
  { title: 'Golden Hour', artist: 'Client / Artist Name', category: 'Mix & Master', cover: '', audio: '/audio/replace-me-6.mp3' },
]

export const services = [
  { title: 'Music Production', text: 'Full songs built from first idea to final master, with direction, sound design and live musicians where it counts.' },
  { title: 'Composition & Arrangement', text: 'Melodies, harmony and orchestration for songs, scores and campaigns, arranged to suit the voice and the story.' },
  { title: 'Vocal Production', text: 'Vocal direction, comping, tuning and tone shaping that keeps the performance human and the emotion intact.' },
  { title: 'Mixing & Mastering', text: 'Clear, wide and powerful mixes that translate from earbuds to club systems, delivered release-ready.' },
  { title: 'Radio & Jingle Production', text: 'Memorable station IDs, jingles and sonic branding written and produced quickly, to broadcast standard.' },
  { title: 'Music for Visuals', text: 'Original scores and sound beds for film, advertising, documentaries and digital content.' },
]

export const about = {
  portrait: '',  // REPLACE: '/images/pasan-portrait.jpg' (4:5 ratio works best)
  quote: 'Every great record begins as silence and an idea worth hearing.',
  paragraphs: [
    'Pasan Mahela is a Sri Lankan music director, producer, composer, arranger and singer working across contemporary and commercial music.',
    'From pop and film songs to radio branding, he shapes each project end to end: writing it, arranging it, producing the vocals, then mixing and mastering it himself. One ear, one standard, from the first note to the final master.',
    'His work moves between Sri Lankan melody and modern international sound, always built around the song.', // REPLACE with your real story
  ],
}

// REPLACE: before/after files for The Sound section.
export const sound = {
  mixing:    { note: 'Raw stems against the finished mix: depth, space and balance.', before: '/audio/mix-before.mp3', after: '/audio/mix-after.mp3' },
  mastering: { note: 'The same mix before and after mastering: loudness, clarity and polish.', before: '/audio/master-before.mp3', after: '/audio/master-after.mp3' },
}

export const projectTypes = ['Song production', 'Composition / arrangement', 'Vocal production', 'Mixing & mastering', 'Jingle / radio', 'Music for film or ads', 'Other']
export const budgets = ['Under $200', '$200 – $500', '$500 – $1,500', '$1,500+', "Let's discuss"]
