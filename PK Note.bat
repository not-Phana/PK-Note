@echo off
setlocal
cd /d "%~dp0"
title Launching PK Note...

:: Start Local NVIDIA Proxy in background if node is installed
where node >nul 2>&1
if %ERRORLEVEL% equ 0 (
    start "" /b node nvidia-proxy.js >nul 2>&1
)

:: Try Edge in App mode (Native standalone window)
where msedge >nul 2>&1
if %ERRORLEVEL% equ 0 (
    start "" msedge --app="file:///%CD:\=/%/index.html" --user-data-dir="%LOCALAPPDATA%\PK-Note-Profile"
    exit /b 0
)

:: Try Chrome in App mode
where chrome >nul 2>&1
if %ERRORLEVEL% equ 0 (
    start "" chrome --app="file:///%CD:\=/%/index.html" --user-data-dir="%LOCALAPPDATA%\PK-Note-Profile"
    exit /b 0
)

:: Fallback to default browser
start "" "%CD%\index.html"
exit /b 0
