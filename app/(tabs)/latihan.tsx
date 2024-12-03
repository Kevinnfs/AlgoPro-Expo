import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
  StyleSheet,
} from "react-native";
import questionsData from "@/question.json";

type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
};

const Latihan = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isInstructionVisible, setIsInstructionVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState(15);
  const [isAnswered, setIsAnswered] = useState(false);
  const [scoreHistory, setScoreHistory] = useState<number[]>([]); // Menyimpan riwayat skor

  useEffect(() => {
    setQuestions(questionsData as Question[]);
  }, []);

  useEffect(() => {
    if (!isInstructionVisible) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            handleNext(); // Otomatis lanjut soal jika waktu habis
            return 15;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timer); // Hentikan timer saat efek di-retrigger
    }
  }, [isInstructionVisible, currentQuestionIndex]);

  const handleNext = () => {
    if (selectedOption === questions[currentQuestionIndex]?.correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setTimeLeft(15); // Reset waktu untuk soal berikutnya
      setIsAnswered(false); // Reset status soal
    } else {
      // Menyimpan skor ke riwayat saat soal selesai
      setScoreHistory([...scoreHistory, score]);

      Alert.alert("Kuis Selesai!", `Skor Anda: ${score}/${questions.length}`, [
        {
          text: "Mulai Ulang",
          onPress: () => {
            resetQuiz(); // Mulai kuis dari awal
          },
        },
      ]);
    }
  };

  const handleAnswer = (option: string) => {
    if (!isAnswered) {
      setSelectedOption(option);
      setIsAnswered(true); // Tandai soal sebagai dijawab
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setTimeLeft(15);
    setIsInstructionVisible(true);
    setIsAnswered(false);
  };

  // Menampilkan riwayat skor dalam tombol
  const handleShowScoreHistory = () => {
    Alert.alert("Riwayat Skor", scoreHistory.join("\n"));
  };

  if (isInstructionVisible) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          padding: 16,
          marginTop: 180,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 24,
          }}
        >
          Petunjuk Pengerjaan
        </Text>
        <Text style={styles.instruction}>
          1. Bacalah setiap soal dengan cermat sebelum menjawab.
        </Text>
        <Text style={styles.instruction}>
          2. Pilih salah satu jawaban yang menurut Anda benar.
        </Text>
        <Text style={styles.instruction}>
          3. Jawaban yang sudah dipilih tidak dapat diubah lagi.
        </Text>
        <Text style={styles.instruction}>
          4. Setiap soal memiliki batas waktu 15 detik untuk menjawab.
        </Text>
        <Text style={styles.instruction}>
          5. Skor Anda akan ditampilkan setelah semua soal selesai.
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#EF8E4A",
            padding: 12,
            borderRadius: 8,
            marginTop: 24,
            alignItems: "center",
          }}
          onPress={() => setIsInstructionVisible(false)} // Sembunyikan petunjuk
        >
          <Text style={{ color: "white", fontSize: 16 }}>Mulai Kuis</Text>
        </TouchableOpacity>

        {/* Tombol Riwayat Skor */}
        <TouchableOpacity
          style={{
            backgroundColor: "#4CAF50",
            padding: 12,
            borderRadius: 8,
            marginTop: 24,
            alignItems: "center",
          }}
          onPress={handleShowScoreHistory}
        >
          <Text style={{ color: "white", fontSize: 16 }}>
            Lihat Riwayat Skor
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          paddingTop: 56,
          paddingBottom: 24,
          backgroundColor: "#EF8E4A",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 24,
        }}
      >
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: 18,
            color: "white",
            fontWeight: "bold",
          }}
        >
          Latihan Soal
        </Text>
      </View>
      <View style={{ flex: 1, padding: 16 }}>
        <View className="flex-row justify-between">
          <Text style={styles.questionNumber}>
            Soal {currentQuestionIndex + 1}/{questions.length}
          </Text>
          <Text style={styles.timer}>Waktu Tersisa: {timeLeft} detik</Text>
        </View>
        <Text style={styles.questionText}>
          {questions[currentQuestionIndex]?.question}
        </Text>

        <FlatList
          data={questions[currentQuestionIndex]?.options}
          renderItem={({ item }) => (
            <TouchableOpacity
              disabled={isAnswered}
              style={[
                styles.optionButton,
                selectedOption === item
                  ? styles.selectedOption
                  : isAnswered
                  ? styles.disabledOption
                  : styles.defaultOption,
              ]}
              onPress={() => handleAnswer(item)}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedOption === item
                    ? styles.selectedOptionText
                    : styles.defaultOptionText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />

        <TouchableOpacity
          disabled={!isAnswered}
          style={[
            styles.nextButton,
            isAnswered ? styles.activeNextButton : styles.disabledNextButton,
          ]}
          onPress={handleNext}
        >
          <Text style={styles.nextButtonText}>
            {currentQuestionIndex === questions.length - 1
              ? "Selesai"
              : "Berikutnya"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
    color: "#333",
  },
  instructionList: {
    marginBottom: 24,
  },
  instruction: {
    fontSize: 16,
    color: "#555",
    marginBottom: 8,
  },
  startButton: {
    backgroundColor: "#EF8E4A",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  startButtonText: {
    color: "white",
    fontSize: 16,
  },
  questionNumber: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  questionText: {
    fontSize: 18,
    marginBottom: 16,
  },
  optionButton: {
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  selectedOption: {
    backgroundColor: "#4CAF50",
  },
  disabledOption: {
    backgroundColor: "#ddd",
  },
  defaultOption: {
    backgroundColor: "#fff",
  },
  optionText: {
    fontSize: 16,
  },
  selectedOptionText: {
    color: "white",
  },
  defaultOptionText: {
    color: "#333",
  },
  nextButton: {
    marginTop: 24,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  activeNextButton: {
    backgroundColor: "#EF8E4A",
  },
  disabledNextButton: {
    backgroundColor: "#d3d3d3",
  },
  nextButtonText: {
    color: "white",
    fontSize: 16,
  },
  timer: {
    fontSize: 18,
    color: "red",
    fontWeight: "bold",
  },
});

export default Latihan;
