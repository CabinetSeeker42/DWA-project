# Onderzoek naar video converters

## FFmpeg
FFmpeg is een super snelle audio en video encoder/converter en streaming server. Het is een command line tool die is opgebouwd van een aantal gratis software/libraries. Deze maakt gebruik van [libavcodec](https://en.wikipedia.org/wiki/Libavcodec) en [libavformat](https://ffmpeg.org/libavformat.html). Voor onze usecase is de video converter heel interessant. 

## HandBrake
HandBrake is een opensource, multithreaded video converter. HandBrake convert een video die al op de server staat naar een formaat die op elk device ondersteund wordt. 

## avconv
Aconv is een complete, cross-platform oplossing voor het opnemen, converteren en streamen van audio en video bestanden. Deze tool is gebouwd op [libavcodec](https://en.wikipedia.org/wiki/Libavcodec), de beste audio en video codec bibliotheek.

## Conclusie
Omdat FFmpeg enorm bekend is en wij weinig tijd hebben zal voor het prototype van Giftle gebruik gemaakt worden van deze tool. Deze tool kan de nodige video formaten converteren.

## Sources
[Linux Video Converters](https://www.linuxlinks.com/best-free-linux-video-converters/)\
[FFmpeg](https://www.linuxlinks.com/FFmpeg/)\
[HandBrake](https://www.linuxlinks.com/HandBrake/)\
[avconv](https://www.linuxlinks.com/avconv/)\
[libavcodec](https://en.wikipedia.org/wiki/Libavcodec)\
[libavformat](https://ffmpeg.org/libavformat.html)