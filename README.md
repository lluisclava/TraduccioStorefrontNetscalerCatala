# Traducció de Citrix Storefront i Netscaler (ADC) al Català
Aquest repositori inclou els fitxers necessari per a la traducció de la interfície d'usuari de l'accés a Citrix (Netscaler Citrix Gatway i Storefront) al Català.

## Com aplicar-ho?

### Netscaler
Primer de tot cal fer una còpia del tema per defecte de Netscaler X1.
Després cal penjar els fitxers del directori "Traducció Netscaler" a /var/netscaler/logon/ modificant el nom de la carpeta Girona-X1 per la del tema que heu creat al pas anterior.
El fitxer "Traducció Netscaler\themes\Girona-X1\resources\config.xml" només hi he afegit: "<Language>ca</Language>". Revisa'l abans de sobreescriure'l per tal d'evitar problemes.
El fitxer "Traducció Netscaler\themes\Girona-X1\script.js" ja existeix i et demanarà sobreescriure'l. Si tenies alguna personalització cal afegir-la al final.

### Sorefront
Cal copiar els fitxers de la carpeta "Traducció Storefront" dins de C:\inetpub\wwwroot\Citrix\[Nom del Store]Web\
Cal copiar la carpeta receiver a tots els servidors amb el rol Storefront de la infraestrucutra, ja que per algun motiu aquesta no es replica. Els altres scripts quan fas un "propagate" sí que es repliquen.

## Referències utilitzades
- https://nerdscaler.com/2018/11/06/adding-additional-languages-to-netscaler-rfwebui-theme/
