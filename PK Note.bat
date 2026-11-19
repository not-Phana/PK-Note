@echo off
setlocal
cd /d "%~dp0"
title Launching PK Note...

:: Start Unified Local Server & NVIDIA Proxy in background if Node is available
where node >nul 2>&1
if %ERRORLEVEL% equ 0 (
    start "" /b node nvidia-proxy.js >nul 2>&1
    timeout /t 1 /nobreak >nul 2>&1

    :: Try Edge in App mode (Native standalone window)
    where msedge >nul 2>&1
    if %ERRORLEVEL% equ 0 (
        start "" msedge --app="http://localhost:4000" --user-data-dir="%LOCALAPPDATA%\PK-Note-Profile"
        exit /b 0
    )

    :: Try Chrome in App mode
    where chrome >nul 2>&1
    if %ERRORLEVEL% equ 0 (
        start "" chrome --app="http://localhost:4000" --user-data-dir="%LOCALAPPDATA%\PK-Note-Profile"
        exit /b 0
    )

    :: Fallback to default browser
    start "" "http://localhost:4000"
    exit /b 0
)

:: Fallback if Node is not installed: run via file protocol
where msedge >nul 2>&1
if %ERRORLEVEL% equ 0 (
    start "" msedge --app="file:///%CD:\=/%/index.html" --user-data-dir="%LOCALAPPDATA%\PK-Note-Profile"
    exit /b 0
)
where chrome >nul 2>&1
if %ERRORLEVEL% equ 0 (
    start "" chrome --app="file:///%CD:\=/%/index.html" --user-data-dir="%LOCALAPPDATA%\PK-Note-Profile"
    exit /b 0
)
start "" "%CD%\index.html"
exit /b 0
