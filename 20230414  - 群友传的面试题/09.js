function useState(initialValue) {
    let state = initialValue;
  
    function setState(newState) {
      state = newState;
      render();
    }
  
    return [state, setState];
  }
  
  function useEffect(effectFn, deps) {
    const hasDeps = deps !== undefined && deps.length > 0;
    const isFirstRender = useRef(true);
    const prevDeps = useRef(deps);
  
    if (!hasDeps || !arraysEqual(deps, prevDeps.current)) {
      effectFn();
      prevDeps.current = deps;
    }
  
    if (isFirstRender.current) {
      isFirstRender.current = false;
    }
  }
  
  function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
  
    for (let i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
  
    return true;
  }
  