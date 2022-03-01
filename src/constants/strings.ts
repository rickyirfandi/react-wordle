export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Mantap gan!', 'Sip', 'Mantul!']
export const GAME_COPIED_MESSAGE = 'Game telah dicopy ke clipboard'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Huruf tidak cukup'
export const WORD_NOT_FOUND_MESSAGE = 'Kata tidak ditemukan'
export const HARD_MODE_ALERT_MESSAGE =
  'Mode sulit hanya dapat diaktifkan di awal permainan'
export const HARD_MODE_DESCRIPTION =
  'Setiap petunjuk yang ditemukan harus digunakan dalam tebakan berikutnya'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'Untuk pengelihatan yang lebih baik'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `Kata yang benar adalah : ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Harus pakai huruf ${guess} di posisi ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Tebakan harus mengandung ${letter}`
export const ENTER_TEXT = 'Tebak'
export const DELETE_TEXT = 'Hapus'
export const STATISTICS_TITLE = 'Statistik'
export const GUESS_DISTRIBUTION_TEXT = 'Distribusi Tebakan'
export const NEW_WORD_TEXT = 'New word in'
export const SHARE_TEXT = 'Bagikan'
export const TOTAL_TRIES_TEXT = 'Total percobaan'
export const SUCCESS_RATE_TEXT = 'Tingkat kesuksesan'
export const CURRENT_STREAK_TEXT = 'Streak saat ini'
export const BEST_STREAK_TEXT = 'Streak terbaik'
