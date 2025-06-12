#!/bin/bash

# سكربت لحذف جميع ملفات binary الشائعة

echo "🧹 بدء حذف ملفات binary..."

find . -type f \( \
  -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.gif" -o \
  -iname "*.bmp" -o -iname "*.svg" -o -iname "*.ico" -o -iname "*.webp" -o \
  -iname "*.mp4" -o -iname "*.mp3" -o -iname "*.avi" -o -iname "*.mov" -o \
  -iname "*.patch" -o -iname "*.exe" -o -iname "*.dll" -o -iname "*.bin" -o \
  -iname "*.zip" \) \
  -exec echo "🗑 حذف: {}" \; -exec rm -f {} \;

echo "✅ تم حذف كل الملفات الثنائية المطلوبة."
