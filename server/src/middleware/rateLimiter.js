import rateLimit from "express-rate-limit";

const message = {
  success: false,
  message: "Too many requests, please try again later.",
};

// لكل الـ API: 100 طلب كل 15 دقيقة
export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message,
});

// لتسجيل الدخول والتسجيل: 10 محاولات كل 15 دقيقة (رح نستخدمه بالدرس الجاي)
export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message,
});