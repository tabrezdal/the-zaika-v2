/**
 * Generates same-day delivery time slots between the outlet's opening and
 * closing time (see OPERATING_HOURS in businessRules.ts), automatically
 * skipping any slot that's already passed. Used by the "Schedule Delivery"
 * tab on checkout. Returns an empty array if there's no time left today
 * (e.g. checking out after closing).
 */
export function generateScheduledSlots(
  openingTime: string,
  closingTime: string,
  slotDurationMinutes = 60
): string[] {
  const now = new Date();
  const slots: string[] = [];

  const [openH, openM] = openingTime.split(":").map(Number);
  const [closeH, closeM] = closingTime.split(":").map(Number);

  const opening = new Date(now);
  opening.setHours(openH, openM, 0, 0);

  const closing = new Date(now);
  closing.setHours(closeH, closeM, 0, 0);

  // Start from whichever is later: opening time, or right now rounded up
  // to the next slot boundary -- so we never offer an already-passed slot.
  let slotStart = new Date(Math.max(opening.getTime(), now.getTime()));
  const minutes = slotStart.getMinutes();
  const remainder = minutes % slotDurationMinutes;
  if (remainder !== 0) {
    slotStart = new Date(slotStart.getTime() + (slotDurationMinutes - remainder) * 60000);
  }
  slotStart.setSeconds(0, 0);

  while (slotStart < closing) {
    const slotEnd = new Date(slotStart.getTime() + slotDurationMinutes * 60000);
    if (slotEnd > closing) break;
    slots.push(`${formatTime(slotStart)} - ${formatTime(slotEnd)}`);
    slotStart = slotEnd;
  }

  return slots;
}

function formatTime(date: Date): string {
  return date.toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit", hour12: true });
}