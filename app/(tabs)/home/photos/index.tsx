import { 
  View, 
  FlatList, 
  Image, 
  Dimensions, 
  ActivityIndicator, 
  Modal, 
  Pressable 
} from "react-native";
import { useEffect, useState } from "react";

const { width } = Dimensions.get("window");
const IMAGE_SIZE = width / 3;

interface Photo {
  id: string;
  download_url: string;
}

export default function Photos() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=1&limit=60")
      .then(res => res.json())
      .then(data => {
        setPhotos(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <>
      <FlatList
        data={photos}
        numColumns={3}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable onPress={() => setSelectedImage(item.download_url)}>
            <Image
              source={{ uri: item.download_url }}
              style={{
                width: IMAGE_SIZE,
                height: IMAGE_SIZE,
                margin: 1
              }}
            />
          </Pressable>
        )}
        showsVerticalScrollIndicator={false}
      />

      {/* Fullscreen modal */}
      <Modal visible={!!selectedImage} transparent>
        <Pressable
          style={{
            flex: 1,
            backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center"
          }}
          onPress={() => setSelectedImage(null)}
        >
          {selectedImage && (
            <Image
              source={{ uri: selectedImage }}
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "contain"
              }}
            />
          )}
        </Pressable>
      </Modal>
    </>
  );
}
