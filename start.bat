@echo off
title AURON FORUM - Next.js Development Environment
cls

rem Enable ANSI coloring natively in Windows Terminal
reg add HKCU\Console /v VirtualTerminalLevel /t REG_DWORD /d 1 /f >nul 2>&1

set "ESC="
set "G=%ESC%[32m"
set "Y=%ESC%[33m"
set "B=%ESC%[36m"
set "R=%ESC%[31m"
set "Reset=%ESC%[0m"
set "Bold=%ESC%[1m"
set "Gold=%ESC%[38;2;212;175;55m"

echo %Gold%━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━%Reset%
echo %Bold%%Gold%   ___   _   _  ____    ___   _   _ 
echo  / _ \ / \ / \/  _ \  / _ \ / \ / \
echo / /_\ \  \_/  \ / \ \/ / \ \  \_/ \
echo \_/ \_\\_____/ \____/\_/ \_/\\_____/%Reset%
echo.
echo %Bold%%Gold%                 AURON TECHNICAL FORUM%Reset%
echo            Technical ^& Non-Technical Community
echo %Gold%━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━%Reset%
echo.

echo %B%[1/4]%Reset% %Bold%Checking Node.js environment...%Reset%
node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo %R%[ERROR] Node.js is not installed or not found on PATH.%Reset%
    echo Please install Node.js from https://nodejs.org/ before running this project.
    pause
    exit /b 1
)
for /f "tokens=*" %%v in ('node -v') do set "NODE_VER=%%v"
echo %G%[SUCCESS]%Reset% Node.js is installed (%NODE_VER%)
echo.

echo %B%[2/4]%Reset% %Bold%Verifying node_modules and dependencies...%Reset%
if not exist "node_modules\" (
    echo %Y%[WARNING] node_modules folder is missing.%Reset%
    echo %Y%[INFO] Installing packages, please wait...%Reset%
    call npm install
    if %errorlevel% neq 0 (
        echo %R%[ERROR] npm install failed.%Reset%
        pause
        exit /b 1
    )
    echo %G%[SUCCESS]%Reset% Dependencies installed successfully.
) else (
    echo %G%[SUCCESS]%Reset% node_modules folder exists.
)
echo.

echo %B%[3/4]%Reset% %Bold%Building local development routes check...%Reset%
echo %G%[SUCCESS]%Reset% Ready to boot Next.js App Router.
echo.

echo %B%[4/4]%Reset% %Bold%Starting Development Server...%Reset%
echo %Gold%------------------------------------------------------------%Reset%
echo   %Bold%Local URL:%Reset%   %B%http://localhost:3000%Reset%
echo   %Bold%Press:%Reset%       %Y%Ctrl + C%Reset% to stop the server
echo %Gold%------------------------------------------------------------%Reset%
echo.

npm run dev
