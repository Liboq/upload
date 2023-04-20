import { defineComponent as r, ref as a, openBlock as l, createElementBlock as u, createElementVNode as _, normalizeClass as i, renderSlot as d } from "vue";
const p = { class: "button-container" }, f = /* @__PURE__ */ r({
  __name: "upload",
  props: {
    type: { default: "primary" },
    size: { default: "middle" }
  },
  setup(o) {
    a("Alex");
    function n(t) {
      const e = {};
      if (typeof t != "string")
        return e;
      const s = t.trim().split(/\s+/);
      for (const c of s)
        e[c] = !0;
      return e;
    }
    return (t, e) => (l(), u("div", p, [
      _("button", {
        class: i(
          n(` button-color--${o.type} button-size--${o.size}`)
        )
      }, [
        d(t.$slots, "default", {}, void 0, !0)
      ], 2)
    ]));
  }
});
const m = (o, n) => {
  const t = o.__vccOpts || o;
  for (const [e, s] of n)
    t[e] = s;
  return t;
}, v = /* @__PURE__ */ m(f, [["__scopeId", "data-v-9c0f51b4"]]);
export {
  v as default
};
