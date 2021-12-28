import {
  Button,
  ButtonGroup,
  Heading,
  Img,
  VStack,
  Text,
  Grid,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { FeatureCard } from "../components/FeatureCard";

const features: { title: string; description: string }[] = [
  {
    title: "時間指定",
    description:
      "多くの人に見てもらいやすい時間帯に自動でツイート。深夜に書き終わっても待つ必要はありません。",
  },
  {
    title: "一括アップロード",
    description:
      "出力したフォルダごとドラッグ&ドロップするだけで投稿の設定ができます。",
  },
  {
    title: "リアルタイムプレビュー",
    description:
      "実際にツイッターに投稿されたときの表示を確認しながら編集できます。",
  },
  {
    title: "宣伝なし",
    description: "ツイートにSamariの宣伝が入ることはありません。",
  },
];

const Home: NextPage = () => {
  return (
    <>
      <VStack
        as="section"
        pt="40px"
        pb="140px"
        px="20px"
        maxW="container.md"
        mx="auto"
        spacing="28px"
        position="relative"
        _before={{
          content: `""`,
          bg: "yellow.400",
          position: "absolute",
          width: "100vw",
          height: "100%",
          bottom: 0,
          clipPath:
            "polygon(0 400px, 100% 300px, 100% calc(100% - 100px), 0% 100%)",
        }}
      >
        {/* Titles */}
        <VStack spacing="8px" textAlign="center">
          <Heading fontSize="28px">簡単操作で漫画を一括投稿</Heading>
          <Text>
            一枚一枚画像を選んで 順番を間違えてやり直し...
            <br />
            Samari(サマリ)なら一括で選択して後から並べ替えるのも簡単です
          </Text>
        </VStack>

        {/* Buttons */}
        <ButtonGroup>
          <Button
            as="a"
            colorScheme="yellow"
            color="black"
            href="https://zenn.dev/s7/scraps/1f58a6cf883b6e"
          >
            詳細を見る
          </Button>
        </ButtonGroup>

        {/* Thumbnail */}
        <Img
          src="/thumbnail.png"
          rounded="lg"
          zIndex="100"
          border="2px"
          borderColor="gray.200"
        />
      </VStack>
      <VStack
        as="section"
        maxW="container.md"
        mx="auto"
        py="40px"
        px="20px"
        spacing="28px"
      >
        <Heading fontSize="28px" textAlign="center">
          内容だけに集中できるように
        </Heading>
        <Grid templateColumns={{ base: "1fr", sm: "1fr 1fr" }} gap="20px">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </Grid>
      </VStack>
      <VStack
        pt="180px"
        pb="80px"
        px="20px"
        position="relative"
        bg="yellow.400"
        clipPath="polygon(0 100px, 0 100%, 100% 100%, 100% 0)"
        spacing="28px"
      >
        <VStack spacing="8px">
          <Heading fontSize="28px">Twitterで進捗を見る</Heading>
          <Text textAlign="center">
            Samariは現在開発中です。お知らせはTwitterで！
          </Text>
        </VStack>
        <ButtonGroup>
          <Button
            as="a"
            bg="twitter"
            color="white"
            href="https://twitter.com/s7tya"
          >
            Twitterを開く
          </Button>
          <Button
            as="a"
            colorScheme="gray"
            href="https://zenn.dev/s7/scraps/1f58a6cf883b6e"
          >
            詳細を見る
          </Button>
        </ButtonGroup>
      </VStack>
    </>
  );
};

export default Home;
