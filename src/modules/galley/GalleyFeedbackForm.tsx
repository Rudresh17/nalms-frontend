import { useState } from 'react'
import { UtensilsCrossed, Check } from 'lucide-react'

const RATINGS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

interface GalleyFeedbackFormProps {
  /** 'dark' for the fullscreen kiosk shell, 'light' for embedding in the main dashboard. */
  theme?: 'dark' | 'light'
}

/** Meal rating + comment form, shared between the kiosk display and the LOGO-facing preview. */
export default function GalleyFeedbackForm({ theme = 'dark' }: GalleyFeedbackFormProps) {
  const [rating, setRating] = useState<number | null>(null)
  const [comment, setComment] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const isDark = theme === 'dark'

  function handleSubmit() {
    // TODO: POST to feedback API once backend exists
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setRating(null)
      setComment('')
    }, 3000)
  }

  if (submitted) {
    return (
      <div
        className={`flex flex-1 flex-col items-center justify-center gap-4 py-10 ${isDark ? 'text-white' : 'text-navy'}`}
      >
        <div className="rounded-full bg-accent/20 p-5 text-accent">
          <Check size={40} />
        </div>
        <div className="text-2xl font-semibold sm:text-3xl">Thank you for your feedback!</div>
      </div>
    )
  }

  return (
    <div
      className={`flex flex-1 flex-col items-center justify-center px-6 py-10 sm:px-8 ${isDark ? 'text-white' : 'text-navy'}`}
    >
      <div className="w-full max-w-2xl">
        <div className="mb-8 flex flex-col items-center text-center">
          <div
            className={`mb-3 rounded-full p-4 text-accent ${isDark ? 'bg-white/10' : 'bg-navy/5'}`}
          >
            <UtensilsCrossed size={28} />
          </div>
          <h1 className="text-2xl font-semibold sm:text-3xl">Today's Meal</h1>
          <p className={`mt-1 ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
            How would you rate this meal?
          </p>
        </div>

        <div className="mb-8 grid grid-cols-5 gap-3 sm:gap-4">
          {RATINGS.map((r) => (
            <button
              key={r}
              onClick={() => setRating(r)}
              className={`aspect-square rounded-xl text-lg font-bold transition-all sm:text-xl ${
                rating === r
                  ? 'scale-105 bg-accent text-white shadow-lg shadow-accent/30'
                  : isDark
                    ? 'bg-white/10 text-white hover:bg-white/20'
                    : 'bg-navy/5 text-navy hover:bg-navy/10'
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Comments or suggestions (optional)"
          className={`h-24 w-full rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent sm:text-base ${
            isDark
              ? 'bg-white/10 text-white placeholder-white/40'
              : 'border border-gray-200 bg-gray-50 text-navy placeholder-gray-400'
          }`}
        />
        <button
          onClick={handleSubmit}
          disabled={rating === null}
          className={`mt-6 w-full rounded-xl py-4 text-base font-medium text-white transition-colors sm:text-lg ${
            isDark
              ? 'bg-accent disabled:bg-white/10 disabled:text-white/40'
              : 'bg-accent disabled:bg-gray-200 disabled:text-gray-400'
          }`}
        >
          Submit Feedback
        </button>
      </div>
    </div>
  )
}
