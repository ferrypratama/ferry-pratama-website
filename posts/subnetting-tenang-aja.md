---
title: "Subnetting, tenang aja."
date: 2026-04-15
tag: teknis
lang: id
readtime: 8
excerpt: "Subnet mask itu bukan sihir. Panduan paling santai untuk belajar subnetting dari nol, lengkap dengan contoh nyata dari topologi kantor."
---

Kalau kamu baru pertama kali ketemu istilah *subnet mask*, wajar kalau bingung. Terdengar teknis, angkanya aneh-aneh (255.255.255.0 itu apaan?), dan kebanyakan penjelasan di internet langsung ngebahas CIDR notation tanpa setup konteks.

Jadi mari kita mulai dari hal yang kamu tahu dulu: **rumah dan alamat.**

> Subnet mask itu seperti kode pos — dia yang menentukan apakah dua alamat IP ada di "lingkungan" yang sama atau tidak.

## Kenapa subnetting itu penting?

Bayangkan sebuah kantor dengan 200 komputer. Kalau semua komputer itu ada di satu network yang sama, setiap kali satu komputer broadcast sesuatu — kirim ARP request misalnya — semua 199 komputer lain harus "dengerin". Itu namanya **broadcast domain**, dan ini boros banget.

Subnetting memecah jaringan besar jadi segmen-segmen kecil. Hasilnya:

- Traffic lebih efisien — broadcast cuma dalam subnet yang sama
- Keamanan lebih baik — subnet berbeda butuh routing untuk berkomunikasi
- Manajemen lebih mudah — masalah di satu subnet tidak langsung mempengaruhi yang lain

## Contoh nyata: topologi kantor

Misalkan kamu punya alamat jaringan `192.168.1.0/24`. Kamu mau bagi jadi 4 subnet untuk 4 departemen: HRD, Finance, Engineering, dan Management.

```
Network   : 192.168.1.0/24
Dipecah   : 4 subnet

Subnet 1 (HRD)         : 192.168.1.0/26   → host .1 – .62
Subnet 2 (Finance)     : 192.168.1.64/26  → host .65 – .126
Subnet 3 (Engineering) : 192.168.1.128/26 → host .129 – .190
Subnet 4 (Management)  : 192.168.1.192/26 → host .193 – .254
```

Dengan /26, setiap subnet punya **62 host yang bisa dipakai**. Kalau HRD cuma punya 30 orang, itu lebih dari cukup.

### Cara hitung cepat: trik "magic number"

Untuk subnet /26, subnet mask-nya adalah `255.255.255.192`. Angka 192 itu didapat dari `256 - 64 = 192`, di mana 64 adalah block size-nya.

**Magic number = 256 - nilai oktet terakhir subnet mask.** Itu titik mulainya setiap subnet baru.

## Kesimpulan

Subnetting itu pattern, bukan hafalan. Begitu kamu ngerti logika di baliknya, sisanya tinggal latihan. Dan latihan itu bisa dimulai dari topologi paling sederhana sekalipun.
