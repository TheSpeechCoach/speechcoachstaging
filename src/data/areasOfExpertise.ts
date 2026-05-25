export type AreaOfExpertise = {
  id: string;
  name: string;
  paragraph: string;
};

export const areasOfExpertise: AreaOfExpertise[] = [
  {
    id: "presentations-public-speaking",
    name: "Presentations & Public Speaking",
    paragraph:
      "Presentation and public speaking coaching for professionals who need to hold a room — boardrooms, keynotes, conferences, panels and town halls. We build the structure, openings, transitions and stage craft that turn information into a message audiences remember, follow and act on.",
  },
  {
    id: "confidence-in-communication",
    name: "Confidence in Communication",
    paragraph:
      "Confidence coaching for people whose ability does not yet show in the moments that matter. We address the nerves, the rushing, the freezing and the self-editing so that you arrive in meetings, interviews and high-stakes conversations sounding like yourself — steady, clear and credible.",
  },
  {
    id: "fluency-elocution-articulation",
    name: "Fluency, Elocution & Articulation",
    paragraph:
      "Fluency, elocution and articulation coaching for speakers who want to be understood the first time. We refine diction, pronunciation, rhythm and clarity so your words land cleanly on the ear — without losing the personality, accent or voice that makes you, you.",
  },
  {
    id: "stage-presence-gravitas",
    name: "Stage Presence & Gravitas",
    paragraph:
      "Stage presence and gravitas coaching for leaders, founders and senior professionals who need to look as authoritative as they are. We work on stillness, eye line, weight, intent and the calm command that signals seniority before you have said a word.",
  },
  {
    id: "accent-dialect-refinement",
    name: "Accent, Dialect & Refinement",
    paragraph:
      "Accent, dialect and refinement coaching for clients who want their speech to travel — across boardrooms, borders and broadcast. We soften, neutralise or polish accent and diction so you are clearly understood internationally, without erasing your identity or heritage.",
  },
  {
    id: "voice-intonation",
    name: "Voice & Intonation",
    paragraph:
      "Voice and intonation coaching for speakers who sound flat, tight, monotone or strained. We unlock tone, pitch, resonance and melodic range so your voice carries warmth, authority and meaning — protecting it through long days, big rooms and demanding speaking schedules.",
  },
  {
    id: "pace-cadence-volume",
    name: "Pace, Cadence & Volume",
    paragraph:
      "Pace, cadence and volume coaching for people who rush when they are nervous, trail off when they are unsure, or drone when they are tired. We train the pause, the emphasis and the breath so every sentence has shape, weight and the time it needs to land.",
  },
  {
    id: "storytelling-techniques",
    name: "Storytelling Techniques",
    paragraph:
      "Storytelling coaching for leaders, founders and experts whose ideas deserve a better frame. We shape narrative arc, contrast, detail and human stakes so your pitch, keynote or all-hands moves audiences from interest, to belief, to action.",
  },
  {
    id: "scripting-composition",
    name: "Scripting & Composition",
    paragraph:
      "Scripting and composition coaching for speakers preparing a specific keynote, pitch, ceremony or broadcast. We craft and tighten the words on the page — structure, openings, transitions, soundbites — so the script reads naturally aloud and gives you a clear, confident track to follow.",
  },
  {
    id: "gesture-body-language",
    name: "Gesture & Body Language",
    paragraph:
      "Gesture and body language coaching for speakers whose physical presence undermines their message. We address posture, hands, stance, micro-expressions and stillness so what your body says aligns with what your voice is asking the room to believe.",
  },
  {
    id: "video-conferencing-digital",
    name: "Video Conferencing & Digital Discourse",
    paragraph:
      "Video conferencing and digital discourse coaching for hybrid leaders, remote teams and online presenters. We work on camera presence, framing, lighting, eye line, energy and pace so you connect through a screen with the same authority and warmth you bring to a room.",
  },
  {
    id: "broadcast-voice-performance",
    name: "Broadcast Voice & Performance",
    paragraph:
      "Broadcast voice and performance coaching for presenters, podcasters, commentators and spokespeople. We shape vocal tone, mic technique, delivery, timing and on-air persona so you sound polished, distinctive and credible across television, radio, podcast and streaming formats.",
  },
];

export const getAreaName = (id: string): string =>
  areasOfExpertise.find((a) => a.id === id)?.name ?? "";
