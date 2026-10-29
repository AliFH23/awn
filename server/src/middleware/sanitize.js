// المفاتيح الخطيرة: أوامر MongoDB ($) والنقاط وتلويث الـ prototype
const isUnsafeKey = (key) =>
  key.startsWith("$") ||
  key.includes(".") ||
  key === "__proto__" ||
  key === "constructor" ||
  key === "prototype";

// بتمر على البيانات بشكل متداخل وبتشيل المفاتيح الخطيرة
const clean = (value) => {
  if (Array.isArray(value)) return value.map(clean);

  if (value && typeof value === "object") {
    const result = {};
    for (const [key, val] of Object.entries(value)) {
      if (isUnsafeKey(key)) continue;
      result[key] = clean(val);
    }
    return result;
  }

  return value;
};

export const sanitize = (req, res, next) => {
  if (req.body) req.body = clean(req.body);
  if (req.params) req.params = clean(req.params);

  // في Express 5 الـ req.query للقراءة فقط، فبنستبدله بهالطريقة
  Object.defineProperty(req, "query", {
    value: clean(req.query),
    writable: true,
    configurable: true,
    enumerable: true,
  });

  next();
};