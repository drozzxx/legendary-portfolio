/**
 * Güvenli DOM erişimi için yardımcı fonksiyonlar
 */

// Güvenli element seçimi
export const safeQuerySelector = (selector: string): Element | null => {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return null
  }
  
  try {
    return document.querySelector(selector)
  } catch (error) {
    console.warn('DOM query selector error:', error)
    return null
  }
}

// Güvenli element seçimi (çoklu)
export const safeQuerySelectorAll = (selector: string): NodeListOf<Element> | null => {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return null
  }
  
  try {
    return document.querySelectorAll(selector)
  } catch (error) {
    console.warn('DOM query selector all error:', error)
    return null
  }
}

// Güvenli className erişimi
export const safeGetClassName = (element: Element | null): string => {
  if (!element || !element.className) {
    return ''
  }
  
  try {
    return element.className
  } catch (error) {
    console.warn('ClassName access error:', error)
    return ''
  }
}

// Güvenli innerText erişimi
export const safeGetInnerText = (element: Element | null): string => {
  if (!element) {
    return ''
  }
  
  try {
    return (element as HTMLElement).innerText || ''
  } catch (error) {
    console.warn('InnerText access error:', error)
    return ''
  }
}

// Touch device kontrolü
export const isTouchDevice = (): boolean => {
  if (typeof window === 'undefined') {
    return false
  }
  
  try {
    return 'ontouchstart' in window || 
           navigator.maxTouchPoints > 0 || 
           (navigator as any).msMaxTouchPoints > 0
  } catch (error) {
    console.warn('Touch device detection error:', error)
    return false
  }
}

// Güvenli MutationObserver oluşturma
export const createSafeMutationObserver = (
  callback: MutationCallback,
  options?: MutationObserverInit
): MutationObserver | null => {
  if (typeof window === 'undefined' || typeof MutationObserver === 'undefined') {
    return null
  }
  
  try {
    return new MutationObserver(callback)
  } catch (error) {
    console.warn('MutationObserver creation error:', error)
    return null
  }
}

// Güvenli observe işlemi
export const safeObserve = (
  observer: MutationObserver | null,
  target: Node | null,
  options?: MutationObserverInit
): boolean => {
  if (!observer || !target) {
    return false
  }
  
  try {
    observer.observe(target, options || { childList: true, subtree: true })
    return true
  } catch (error) {
    console.warn('MutationObserver observe error:', error)
    return false
  }
}

// Güvenli disconnect
export const safeDisconnect = (observer: MutationObserver | null): void => {
  if (!observer) return
  
  try {
    observer.disconnect()
  } catch (error) {
    console.warn('MutationObserver disconnect error:', error)
  }
}

// Güvenli event listener ekleme
export const safeAddEventListener = (
  element: EventTarget | null,
  event: string,
  handler: EventListener,
  options?: boolean | AddEventListenerOptions
): boolean => {
  if (!element) return false
  
  try {
    element.addEventListener(event, handler, options)
    return true
  } catch (error) {
    console.warn('Event listener add error:', error)
    return false
  }
}

// Güvenli event listener kaldırma
export const safeRemoveEventListener = (
  element: EventTarget | null,
  event: string,
  handler: EventListener,
  options?: boolean | EventListenerOptions
): boolean => {
  if (!element) return false
  
  try {
    element.removeEventListener(event, handler, options)
    return true
  } catch (error) {
    console.warn('Event listener remove error:', error)
    return false
  }
}
