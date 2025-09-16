/**
 * Tarayıcı eklentileri ve harici script'lerden kaynaklanan hataları önlemek için yardımcı fonksiyonlar
 */

// Güvenli window objesi kontrolü
export const safeWindow = (): Window | null => {
  try {
    if (typeof window !== 'undefined' && window) {
      return window
    }
  } catch (error) {
    console.warn('Window access error:', error)
  }
  return null
}

// Güvenli document objesi kontrolü
export const safeDocument = (): Document | null => {
  try {
    if (typeof document !== 'undefined' && document) {
      return document
    }
  } catch (error) {
    console.warn('Document access error:', error)
  }
  return null
}

// Güvenli navigator objesi kontrolü
export const safeNavigator = (): Navigator | null => {
  try {
    const win = safeWindow()
    if (win && win.navigator) {
      return win.navigator
    }
  } catch (error) {
    console.warn('Navigator access error:', error)
  }
  return null
}

// Tarayıcı eklentilerinden korunma
export const protectFromExtensions = (): void => {
  try {
    const win = safeWindow()
    if (!win) return

    // Eklenti hatalarını yakala ve logla
    const originalError = win.onerror
    win.onerror = (message, source, lineno, colno, error) => {
      // Sadece kendi kodumuzdan gelen hataları logla
      if (source && source.includes('localhost') || source && source.includes('127.0.0.1')) {
        console.error('Application error:', { message, source, lineno, colno, error })
      }
      // Eklenti hatalarını sessizce geç
      return true
    }

    // Unhandled promise rejection'ları yakala
    const originalUnhandledRejection = win.onunhandledrejection
    win.onunhandledrejection = (event) => {
      // Sadece kendi kodumuzdan gelen rejection'ları logla
      if (event.reason && event.reason.stack && 
          (event.reason.stack.includes('localhost') || event.reason.stack.includes('127.0.0.1'))) {
        console.error('Unhandled promise rejection:', event.reason)
      }
      // Eklenti rejection'larını sessizce geç
      event.preventDefault()
    }

  } catch (error) {
    console.warn('Extension protection setup error:', error)
  }
}

// Güvenli touch kontrolü (eklenti hatalarını önler)
export const safeTouchCheck = (): boolean => {
  try {
    const win = safeWindow()
    if (!win) return false

    // Önce güvenli kontroller
    if (win.navigator && typeof win.navigator.maxTouchPoints === 'number') {
      return win.navigator.maxTouchPoints > 0
    }

    // Sonra ontouchstart kontrolü
    if ('ontouchstart' in win) {
      return true
    }

    return false
  } catch (error) {
    console.warn('Touch check error:', error)
    return false
  }
}

// Güvenli MutationObserver oluşturma (eklenti hatalarını önler)
export const createProtectedMutationObserver = (
  callback: MutationCallback,
  options?: MutationObserverInit
): MutationObserver | null => {
  try {
    const win = safeWindow()
    if (!win || typeof win.MutationObserver === 'undefined') {
      return null
    }

    return new win.MutationObserver((mutations, observer) => {
      try {
        callback(mutations, observer)
      } catch (error) {
        console.warn('MutationObserver callback error:', error)
      }
    })
  } catch (error) {
    console.warn('MutationObserver creation error:', error)
    return null
  }
}

// Güvenli element seçimi (eklenti hatalarını önler)
export const safeQuerySelector = (selector: string): Element | null => {
  try {
    const doc = safeDocument()
    if (!doc) return null

    return doc.querySelector(selector)
  } catch (error) {
    console.warn('QuerySelector error:', error)
    return null
  }
}

// Güvenli className erişimi
export const safeGetClassName = (element: Element | null): string => {
  if (!element) return ''
  
  try {
    return element.className || ''
  } catch (error) {
    console.warn('ClassName access error:', error)
    return ''
  }
}

// Güvenli innerText erişimi
export const safeGetInnerText = (element: Element | null): string => {
  if (!element) return ''
  
  try {
    const htmlElement = element as HTMLElement
    return htmlElement.innerText || htmlElement.textContent || ''
  } catch (error) {
    console.warn('InnerText access error:', error)
    return ''
  }
}

// Eklenti hatalarını filtrele
export const filterExtensionErrors = (error: Error): boolean => {
  const errorMessage = error.message || error.toString()
  const errorStack = error.stack || ''
  
  // Eklenti kaynaklı hataları filtrele
  const extensionPatterns = [
    'chrome-extension://',
    'moz-extension://',
    'safari-extension://',
    'edge-extension://',
    'content_script.js',
    'vendor.js',
    'background.js',
    'popup.js'
  ]
  
  return !extensionPatterns.some(pattern => 
    errorMessage.includes(pattern) || errorStack.includes(pattern)
  )
}
