// Versioned persistence adapter.
// Phase 1 keeps the legacy localStorage behavior intact while providing a clean state boundary
// for the new app architecture.
window.PILLState = Object.freeze({
  schemaVersion: 1,
  key: "pill_app_state_v1",

  load() {
    try {
      const raw = localStorage.getItem(this.key);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      return parsed && parsed.schemaVersion === this.schemaVersion ? parsed : null;
    } catch (_) {
      return null;
    }
  },

  save(data) {
    const payload = {
      schemaVersion: this.schemaVersion,
      savedAt: new Date().toISOString(),
      data
    };
    localStorage.setItem(this.key, JSON.stringify(payload));
    return payload;
  },

  clear() {
    localStorage.removeItem(this.key);
  }
});
