#!/bin/sh
cpuload=$(top -bn1 | grep "%Cpu" | tail -1 | grep -P '(....|...) id,' | awk '{print 100-$8}')
cpuload_normalized=$(echo "scale=1; $cpuload*1" | bc)
cputemp_long=$(cat /sys/class/thermal/thermal_zone0/temp)
cputemp=$(echo "scale=1; $cputemp_long/1000" | bc)
memtotal=$(free | grep "Mem:" | tail -l | awk '{print $2}')
memused=$(free | grep "Mem:" | tail -l | awk '{print $3}')
mempercent=$(echo "scale=1; ($memused/$memtotal)*100" | bc)
echo  $cpuload_normalized%  $cputemp°C  $mempercent% 