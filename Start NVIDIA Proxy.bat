@echo off
setlocal
title PK Note - Server & NVIDIA AI Proxy

cd /d "%~dp0"

where node >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo ======================================================================
    echo [ERROR] Node.js is not found on your PATH.
    echo Please install Node.js from https://nodejs.org to run the local server.
    echo ======================================================================
    pause
    exit /b 1
)

echo Starting PK Note Server and NVIDIA AI Proxy...
echo.
node nvidia-proxy.js
pause
