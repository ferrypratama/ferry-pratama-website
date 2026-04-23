---
title: "OSPF vs EIGRP: mana yang dipakai dunia nyata?"
date: 2026-04-01
tag: teknis
lang: id
readtime: 10
excerpt: "Di lab pake keduanya. Di real network? Jawabannya lebih nuanced dari yang diajarkan di kursus manapun."
---

Kalau kamu belajar CCNA, kamu pasti diajarin dua routing protocol ini: **OSPF** dan **EIGRP**. Dan kalau kamu seperti kebanyakan murid saya, pertanyaan yang muncul setelah belajar keduanya biasanya sama: *"Terus di dunia nyata dipakenya yang mana?"*

Jawabannya: **tergantung, dan kamu harus tau tergantungnya apa**.

## Konteks dulu: kenapa ada dua?

OSPF (Open Shortest Path First) adalah open standard — artinya bisa dijalankan di router dari vendor apapun: Cisco, MikroTik, Juniper, Huawei. EIGRP (Enhanced Interior Gateway Routing Protocol) adalah Cisco proprietary — dulu. Cisco akhirnya buka sebagian implementasinya, tapi di praktiknya masih sangat identik dengan ekosistem Cisco.

## Kapan OSPF lebih masuk akal

Pakai OSPF kalau:

- **Lingkungan multi-vendor** — kantor punya mix Cisco, MikroTik, dan Juniper? OSPF satu-satunya pilihan yang aman.
- **Jaringan yang besar dan kompleks** — OSPF dengan area hierarchy (`area 0`, `area 1`, dst.) lebih scalable untuk enterprise besar.
- **Kamu mau skill yang transferable** — kalau kamu mau kerja di berbagai tempat, OSPF lebih universal.

## Kapan EIGRP masih dipakai

EIGRP masih relevan kalau:

- **Full Cisco shop** — semua device Cisco, dan tim sudah familiar dengan EIGRP behavior.
- **Konvergensi adalah prioritas** — EIGRP konvergensinya lebih cepat dari OSPF dalam banyak skenario karena DUAL algorithm.
- **Konfigurasi lebih simpel** — EIGRP lebih mudah di-setup untuk jaringan ukuran medium yang homogen.

## Yang terjadi di lapangan

Jujur: mayoritas jaringan enterprise baru di Indonesia yang saya lihat pakai **OSPF**. Alasannya sederhana — vendor diversity makin tinggi, dan tidak ada yang mau lock-in ke satu vendor untuk routing protocol.

EIGRP masih hidup di jaringan yang dibangun bertahun-tahun lalu dengan full Cisco stack dan belum ada urgensi untuk migrasi.

```
show ip ospf neighbor   ← yang lebih sering saya ketik di lapangan
show ip eigrp neighbors ← masih ada, tapi makin jarang
```

## Kesimpulan praktis

Kuasai keduanya untuk ujian CCNA — kamu memang harus bisa dua-duanya. Tapi kalau kamu mau fokus untuk skill yang paling relevan di industri saat ini, **invest lebih dalam ke OSPF**: area design, LSA types, redistribution, dan troubleshooting-nya.

EIGRP bukan buang-buang waktu. Tapi prioritaskan yang lebih banyak dipakai.
