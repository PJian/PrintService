@echo off
rem start install
set relativePath=%~dp0
call %relativePath%InstallOPS-NT.bat
rem start service
net start OPS
if %errorlevel% == 2 echo Could not start service.
if %errorlevel% == 0 echo Service started successfully.
echo Errorlevel: %errorlevel%