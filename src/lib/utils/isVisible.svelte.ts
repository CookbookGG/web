export function isVisible<T extends HTMLElement>(): [{ visible: boolean }, (ref: T) => void] {
  const visibility = $state({ visible: false })


  const setVisibility = (ref: T) => {

    $effect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          visibility.visible = entry.isIntersecting
        },
        { threshold: 0.1 },
      );

      if (ref) {
        observer.observe(ref);
      }

      return () => {
        if (observer) observer.disconnect();
      };
    });
  }

  return [visibility, setVisibility]

}
