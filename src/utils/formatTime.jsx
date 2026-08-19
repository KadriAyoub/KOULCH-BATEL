import { intervalToDuration } from 'date-fns'

export default function formatTime(totalSeconds) {
    const { hours = 0, minutes = 0, seconds = 0 } = intervalToDuration({
        start: 0,
        end: totalSeconds * 1000,
    })

    return [hours, minutes, seconds]
        .map((n) => String(n).padStart(2, '0'))
        .join(':')
}