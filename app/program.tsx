import { View, Text, Pressable, ScrollView } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const programs = [
  {
    title: "Mencetak Bilangan Ganjil dalam Rentang",
    code: `
#include <iostream>
using namespace std;

void printOddNumbers(int start, int end) {
    for (int i = start; i <= end; i++) {
        if (i % 2 != 0) {
            cout << i << " ";
        }
    }
}

int main() {
    int start, end;
    cout << "Masukkan rentang awal: ";
    cin >> start;
    cout << "Masukkan rentang akhir: ";
    cin >> end;
    cout << "Bilangan ganjil: ";
    printOddNumbers(start, end);
    return 0;
}
    `,
  },
  {
    title: "Menampilkan Bilangan Pangkat",
    code: `
#include <iostream>
using namespace std;

int power(int base, int exponent) {
    int result = 1;
    for (int i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

int main() {
    int base, exponent;
    cout << "Masukkan basis: ";
    cin >> base;
    cout << "Masukkan pangkat: ";
    cin >> exponent;
    cout << base << " pangkat " << exponent << " adalah " << power(base, exponent) << endl;
    return 0;
}
    `,
  },
  {
    title: "Mencari Nilai Terkecil",
    code: `
#include <iostream>
using namespace std;

int findMin(int arr[], int size) {
    int minVal = arr[0];
    for (int i = 1; i < size; i++) {
        if (arr[i] < minVal) minVal = arr[i];
    }
    return minVal;
}

int main() {
    int n;
    cout << "Masukkan jumlah elemen: ";
    cin >> n;

    int numbers[n];
    for (int i = 0; i < n; i++) {
        cout << "Masukkan angka ke-" << i + 1 << ": ";
        cin >> numbers[i];
    }

    cout << "Angka terkecil adalah " << findMin(numbers, n) << endl;
    return 0;
}
    `,
  },
  {
    title: "Konversi Jam ke Detik",
    code: `
#include <iostream>
using namespace std;

int hoursToSeconds(int hours) {
    return hours * 3600;
}

int main() {
    int hours;
    cout << "Masukkan jumlah jam: ";
    cin >> hours;
    cout << hours << " jam sama dengan " << hoursToSeconds(hours) << " detik." << endl;
    return 0;
}
    `,
  },
  {
    title: "Konversi Celcius ke Fahrenheit",
    code: `
#include <iostream>
using namespace std;

double celsiusToFahrenheit(double celsius) {
    return (celsius * 9 / 5) + 32;
}

int main() {
    double c;
    cout << "Masukkan suhu dalam Celsius: ";
    cin >> c;
    cout << "Suhu dalam Fahrenheit: " << celsiusToFahrenheit(c) << " F" << endl;
    return 0;
}
    `,
  },
  {
    title: "Menghitung Bilangan Kuadrat",
    code: `
#include <iostream>
using namespace std;

int hitungKuadrat(int angka) {
    return angka * angka;
}

int main() {
    int angka;
    cout << "Masukkan sebuah bilangan: ";
    cin >> angka;

    int hasil = hitungKuadrat(angka);
    cout << "Kuadrat dari " << angka << " adalah: " << hasil << endl;

    return 0;
}
    `,
  },
  {
    title: "Menghitung Rata-rata",
    code: `
#include <iostream>
using namespace std;

float hitungRataRata(int arr[], int n) {
    int total = 0;
    for (int i = 0; i < n; i++) {
        total += arr[i];
    }
    return static_cast<float>(total) / n;
}

int main() {
    int n;
    cout << "Masukkan jumlah elemen: ";
    cin >> n;

    int angka[n];
    cout << "Masukkan " << n << " angka:\\n";
    for (int i = 0; i < n; i++) {
        cout << "Angka ke-" << i + 1 << ": ";
        cin >> angka[i];
    }

    float rataRata = hitungRataRata(angka, n);
    cout << "Rata-rata: " << rataRata << endl;

    return 0;
}
    `,
  },
  {
    title: "Menghitung Volume Kubus",
    code: `
#include <iostream>
using namespace std;

int hitungVolumeKubus(int sisi) {
    return sisi * sisi * sisi;
}

int main() {
    int sisi;
    cout << "Masukkan panjang sisi kubus: ";
    cin >> sisi;

    int volume = hitungVolumeKubus(sisi);
    cout << "Volume kubus adalah: " << volume << " satuan kubik" << endl;

    return 0;
}
    `,
  },
  {
    title: "Menghitung Jarak dalam Kilometer",
    code: `
#include <iostream>
using namespace std;

double hitungJarakKm(double waktuJam, double kecepatanKmPerJam) {
    return waktuJam * kecepatanKmPerJam;
}

int main() {
    double waktuJam, kecepatanKmPerJam;

    cout << "Masukkan waktu tempuh (dalam jam): ";
    cin >> waktuJam;
    cout << "Masukkan kecepatan rata-rata (dalam km/jam): ";
    cin >> kecepatanKmPerJam;

    double jarak = hitungJarakKm(waktuJam, kecepatanKmPerJam);
    cout << "Jarak tempuh adalah: " << jarak << " km" << endl;

    return 0;
}
    `,
  },
  {
    title: "Memeriksa Bilangan Ganjil atau Genap",
    code: `
#include <iostream>
using namespace std;

void cekGanjilGenap(int angka) {
    if (angka % 2 == 0) {
        cout << angka << " adalah bilangan genap." << endl;
    } else {
        cout << angka << " adalah bilangan ganjil." << endl;
    }
}

int main() {
    int angka;
    cout << "Masukkan sebuah bilangan: ";
    cin >> angka;
    cekGanjilGenap(angka);
    return 0;
}
    `,
  },
  {
    title: "Mencari Nilai Maksimum",
    code: `
#include <iostream>
using namespace std;

int cariMaksimum(int a, int b) {
    return (a > b) ? a : b;
}

int main() {
    int angka1, angka2;
    cout << "Masukkan angka pertama: ";
    cin >> angka1;
    cout << "Masukkan angka kedua: ";
    cin >> angka2;
    int maksimum = cariMaksimum(angka1, angka2);
    cout << "Nilai maksimum adalah: " << maksimum << endl;
    return 0;
}
    `,
  },
  {
    title: "Menampilkan Segitiga Bintang",
    code: `
#include <iostream>
using namespace std;

void cetakSegitiga(int tinggi) {
    for (int i = 1; i <= tinggi; i++) {
        for (int j = 1; j <= i; j++) {
            cout << "*";
        }
        cout << endl;
    }
}

int main() {
    int tinggi;
    cout << "Masukkan tinggi segitiga: ";
    cin >> tinggi;
    cetakSegitiga(tinggi);
    return 0;
}
    `,
  },
  {
    title: "Menentukan Bilangan Prima",
    code: `
#include <iostream>
using namespace std;

bool cekPrima(int angka) {
    if (angka <= 1) return false;
    for (int i = 2; i <= angka / 2; i++) {
        if (angka % i == 0) return false;
    }
    return true;
}

int main() {
    int angka;
    cout << "Masukkan sebuah bilangan: ";
    cin >> angka;
    if (cekPrima(angka)) {
        cout << angka << " adalah bilangan prima." << endl;
    } else {
        cout << angka << " bukan bilangan prima." << endl;
    }
    return 0;
}
    `,
  },
  {
    title: "Menentukan Tahun Kabisat",
    code: `
#include <iostream>
using namespace std;

bool cekKabisat(int tahun) {
    if ((tahun % 4 == 0 && tahun % 100 != 0) || (tahun % 400 == 0)) {
        return true;
    }
    return false;
}

int main() {
    int tahun;
    cout << "Masukkan tahun: ";
    cin >> tahun;
    if (cekKabisat(tahun)) {
        cout << tahun << " adalah tahun kabisat." << endl;
    } else {
        cout << tahun << " bukan tahun kabisat." << endl;
    }
    return 0;
}
    `,
  },
  // Tambahkan lebih banyak program sesuai kebutuhan...
];

const Program = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="pt-14 pb-6 bg-[#EF8E4A] w-full flex-row items-center px-6">
        <Pressable
          onPress={() => navigation.goBack()}
          className="p-2 rounded-full bg-[#fbb17d] items-center justify-center"
        >
          <Ionicons name="chevron-back-outline" size={24} color="white" />
        </Pressable>
        <Text
          className="flex-1 text-center text-lg text-white"
          style={{ fontFamily: "LoraBold" }}
        >
          Contoh Program C++
        </Text>
      </View>

      {/* Main Content */}
      <ScrollView className="flex-1 bg-white px-6 mt-4">
        {programs.map((program, index) => (
          <View
            key={index}
            className="mb-4 p-4 border-2 border-gray-200 rounded-lg shadow-md"
          >
            <Text
              className="text-lg font-bold mb-2 text-[#EF8E4A]"
              style={{ fontFamily: "LoraBold" }}
            >
              {program.title}
            </Text>
            <ScrollView
              horizontal
              className="bg-gray-100 p-3 rounded-md"
              contentContainerStyle={{ flexGrow: 1 }}
            >
              <Text
                style={{
                  fontFamily: "monospace",
                  fontSize: 14,
                }}
              >
                {program.code}
              </Text>
            </ScrollView>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Program;
