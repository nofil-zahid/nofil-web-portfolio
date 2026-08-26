/**
 * Reusably copies text to the user's clipboard.
 * Uses navigator.clipboard when available, falling back to document.execCommand.
 */
export const copyToClipboard = async (text: string): Promise<boolean> => {
  if (!text) return false;

  // Modern Async Clipboard API
  if (navigator?.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fall through to fallback on failure (e.g., permission denied or insecure context)
    }
  }

  // Fallback for older browsers or non-secure HTTP contexts
  try {
    const textArea = document.createElement('textarea');
    textArea.value = text;

    // Position off-screen to avoid visual flicker
    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '-9999px';
    textArea.style.opacity = '0';
    textArea.setAttribute('readonly', '');

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);

    return successful;
  } catch {
    return false;
  }
};
