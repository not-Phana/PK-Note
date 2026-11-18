@echo off
setlocal
title PK Note - Local AI Server (LM Studio)

set "LMS=%USERPROFILE%\.lmstudio\bin\lms.exe"
if not exist "%LMS%" set "LMS=lms"

echo Starting LM Studio API server on http://localhost:1234/v1 with CORS enabled...
"%LMS%" server start --cors --port 1234
if errorlevel 1 (
    echo.
    echo Could not start LM Studio CLI. Trying Ollama with OLLAMA_ORIGINS=* ...
    set OLLAMA_ORIGINS=*
    ollama serve
    pause
    exit /b 0
)

echo.
echo Loading google/gemma-4-e4b (you can switch to any of your 13 models inside PK Note)...
"%LMS%" load google/gemma-4-e4b --yes

echo.
echo Local AI is READY at http://localhost:1234/v1
echo Open PK Note -> AI -> Setup -> Local Model -> Test
pause
