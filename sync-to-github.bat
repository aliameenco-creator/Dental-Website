@echo off
echo.
echo ========================================
echo    Syncing your website to GitHub...
echo ========================================
echo.

cd /d "%~dp0"

git add -A
git commit -m "Website update - %date% %time%"
git push origin main

echo.
echo ========================================
echo    Done! Your changes are now on GitHub
echo ========================================
echo.
pause
