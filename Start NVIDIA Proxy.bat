@echo off
setlocal
title PK Note - NVIDIA AI Local Proxy

cd /d "%~dp0"
echo Starting PK Note NVIDIA NIM Local CORS Proxy...
echo Target: https://integrate.api.nvidia.com/v1
echo Local:  http://127.0.0.1:4000/v1
echo.

where node >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo [ERROR] Node.js is not found on your PATH.
    echo Please install Node.js from https://nodejs.org to run the local NVIDIA proxy.
    echo Alternatively, use Groq or a free Cloudflare Worker.
    pause
    exit /b 1
)

node nvidia-proxy.js
pause
