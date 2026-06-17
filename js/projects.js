// ============================================================
//  PROJECT DATA — edit this file to manage your portfolio
// ============================================================

const PROJECTS = [
  {
    id: "p01",
    titleOverride: "Ljubičice - Možda je vreme (Official video)",
    type: "VIDEO EDITOR · COLOR GRADE ASSISTANT",
    thumb: "https://img.youtube.com/vi/Tg5XqRupDRc/maxresdefault.jpg",
    platform: "youtube",
    embed: "Tg5XqRupDRc?si=A4cxAcf8E7YMel8V",
    description: "Role: Video Editor, Color Grade Assistant",
    related: ["p02", "p03", "p05"]
  },
  {
    id: "p02",
    titleOverride: "Vartra - Rosarium Live @ Mount of Artan",
    type: "VIDEO EDITOR · COLORIST · DP",
    thumb: "https://img.youtube.com/vi/K0VVriPxyic/maxresdefault.jpg",
    platform: "youtube",
    embed: "K0VVriPxyic?si=32ia9ilmLvTbR2rI",
    description: "Role: Video Editor, Colorist, Director of Photography",
    related: ["p01", "p03", "p10"]
  },
  {
    id: "p03",
    titleOverride: "Ana & The Changes - Zla",
    type: "VIDEO EDITOR · COLORIST · 1ST AC",
    thumb: "https://img.youtube.com/vi/ZX1-rUsSBog/maxresdefault.jpg",
    platform: "youtube",
    embed: "ZX1-rUsSBog?si=V09IjiYcnikPZQT4",
    description: "Role: Video Editor, Colorist, 1st AC",
    related: ["p01", "p02", "p04"]
  },
  {
    id: "p04",
    titleOverride: null,
    type: "1ST AC",
    thumb: "https://vumbnail.com/1130873353.jpg",
    platform: "vimeo",
    embed: "1130873353",
    description: "Role: 1st AC",
    related: ["p03", "p05", "p06"]
  },
  {
    id: "p05",
    titleOverride: "The Assistant | Your time matters!",
    type: "D.I.T. · COLORIST",
    thumb: "https://img.youtube.com/vi/Lznc7p43nos/maxresdefault.jpg",
    platform: "youtube",
    embed: "Lznc7p43nos?si=JPDcvtLuCn66347d",
    description: "Role: D.I.T., Colorist",
    related: ["p01", "p04", "p06"]
  },
  {
    id: "p06",
    titleOverride: null,
    type: "1ST AC",
    thumb: "https://vumbnail.com/1002244883.jpg",
    platform: "vimeo",
    embed: "1002244883",
    description: "Role: 1st AC",
    related: ["p04", "p05", "p07"]
  },
  {
    id: "p07",
    titleOverride: "Ljubičice - Da li roboti se plaše",
    type: "1ST AC",
    thumb: "https://img.youtube.com/vi/IWZfWt7EghQ/maxresdefault.jpg",
    platform: "youtube",
    embed: "IWZfWt7EghQ?si=nArebueMziEIVCSW",
    description: "Role: 1st AC",
    related: ["p04", "p06", "p08"]
  },
  {
    id: "p08",
    titleOverride: "Ljubav i Bes, KC Grad Beograd, 28.02.2026.",
    type: "DP",
    thumb: "https://img.youtube.com/vi/aj4yL-qYpMI/maxresdefault.jpg",
    platform: "youtube",
    embed: "aj4yL-qYpMI?si=FleddtfGVrdGgX6s",
    description: "Role: Director of Photography",
    related: ["p02", "p07", "p09"]
  },
  {
    id: "p09",
    titleOverride: "Simpsonovi kao lažni proroci - FNT Lab",
    type: "VIDEO EDITOR · GENERAL TECHNICIAN",
    thumb: "https://img.youtube.com/vi/gheWLlP-IOo/maxresdefault.jpg",
    platform: "youtube",
    embed: "gheWLlP-IOo?si=7AFUAlB-njuNyrN-",
    description: "Role: Video Editor, General Technician on set",
    related: ["p01", "p08", "p10"]
  },
  {
    id: "p10",
    titleOverride: "Ljubav i Bes K9, Novi Sad, 2023. Aftermovie",
    type: "VIDEO EDITOR · COLORIST · DP",
    thumb: "https://img.youtube.com/vi/NuK7GHovRGg/maxresdefault.jpg",
    platform: "youtube",
    embed: "NuK7GHovRGg?si=w-SpL0XmfcUO2NE9",
    description: "Role: Video Editor, Colorist, DP",
    related: ["p02", "p09", "p11"]
  },
  {
    id: "p11",
    titleOverride: "Izgubizmo - Plovi [Official Video]",
    type: "SCREENWRITER",
    thumb: "https://img.youtube.com/vi/O_8EUuDsOow/maxresdefault.jpg",
    platform: "youtube",
    embed: "O_8EUuDsOow?si=3OgIwxE8GcpvoK-m",
    description: "Role: Screenwriter",
    related: ["p09", "p10", "p12"]
  },
  {
    id: "p12",
    titleOverride: "Ljubav i Bes Novi Sad, 2025. aftermovie!",
    type: "VIDEO EDITOR · COLORIST · DP",
    thumb: "https://img.youtube.com/vi/pQiSj7P95tA/maxresdefault.jpg",
    platform: "youtube",
    embed: "pQiSj7P95tA?si=Onro25RUWlWhUsRR",
    description: "Role: Video Editor, Colorist, DP",
    related: ["p02", "p10", "p11"]
  },
  {
    id: "p13",
    titleOverride: "Fake News Tragač - Blokadna Beležnica",
    type: "DP · COLORIST",
    thumb: "thumb-p13.jpg",
    thumbAspect: "16/9",
    platform: "external",
    externalUrl: "https://www.facebook.com/FNTragac/videos/680707547819968/",
    description: "Role: DP, Colorist",
    related: ["p08", "p12", "p14"]
  },
  {
    id: "p14",
    titleOverride: "Radio021 5 Reel series",
    type: "DP · COLORIST",
    thumb: "thumb-p14.jpg",
    thumbAspect: "16/9",
    platform: "external",
    externalUrl: "https://www.instagram.com/reels/DF5OI85x0lm/",
    description: "Role: DP, Colorist",
    related: ["p02", "p10", "p13"]
  }
];
