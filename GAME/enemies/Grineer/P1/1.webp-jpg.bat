@echo off
setlocal enabledelayedexpansion

if not exist "*.webp" (
    pause
    exit /b
)

for %%i in (*.webp) do (
    ren "%%i" "%%~ni.jpg"
)
