# MCV 🚀

Red Alert(인기 게임)의 MCV(Mobile Construction Vehicle)처럼, [Eliza](https://github.com/elizaOS/eliza)를 기반으로 멀티체인에서 AI-NFT를 출시할 수 있는 손쉬운 개발 키트입니다.

## ✨ 기능

- Eliza의 캐릭터 파일을 사용하여 AI-NFT [메타데이터](https://docs.xnomad.ai/ai-nft-metadata)를 패키징
- NFT 특성을 성격으로 변환하고 캐릭터 파일에 통합
- AI-NFT의 배포, 민팅(Mint), 소각(Burn)과 같은 기본 기능 제공
- 멀티체인에서 계약 수준의 AI-NFT 관리를 지원
- AI 에이전트를 통해 AI-NFT 실행 가능

## ⛓️ 지원되는 블록체인

- Solana
- EVM (곧 지원 예정)

## 🌐 빠른 시작

### 설치

```
npm install @xnomad/mcv
```

### 사용 방법

Solana에서 컬렉션 생성:

```typescript
// Solana 네트워크 엔드포인트와 키페어를 사용하여 NFT 도구 초기화
const nftTool = new NftTool('https://api.mainnet-beta.solana.com', keypair);

// NFT 컬렉션 생성
const { collection } = await nftTool.createCollection({
  name: 'example', // 컬렉션 이름
  uri: 'https://example.com', // 컬렉션 메타데이터 URI
  royaltyBps: 100, // 로열티 비율, 100 = 1%
});

// 캔디 머신(Candy Machine) 구성 설정
const { candyMachine } = await nftTool.setupCollection({
  collectionAddress: collection, // 컬렉션 주소
  itemsCount: 3, // NFT 총 개수
  mintStages: [
    // 민팅 단계 구성
    {
      label: '1', // 단계 라벨
      priceInSol: 0.01, // SOL 단위의 민팅 가격
      startDate: new Date(), // 시작 시간
    },
  ],
});

// 컬렉션의 NFT 아이템 준비
await nftTool.prepareCollectionItems({
  candyMachine, // 캔디 머신 인스턴스
  index: 0, // 시작 인덱스
  items: [
    // NFT 아이템 목록
    { name: 'example #1', uri: 'https://example.com/1.json' },
    { name: 'example #2', uri: 'https://example.com/2.json' },
    { name: 'example #3', uri: 'https://example.com/3.json' },
  ],
});
```

Upload metadata to S3:

```typescript
// JSON 메타데이터를 AWS S3에 업로드
const url = await nftTool.uploadJsonToS3({
  json: metadata, // 메타데이터 객체
  s3Config: {
    // S3 구성
    bucket: 'bucket', // 버킷 이름
    accessKeyId: 'accessKeyId', // AWS 액세스 키 ID
    secretAccessKey: 'secretAccessKey', // AWS 시크릿 키
    region: 'region', // AWS 리전
  },
});
```

## 📜 라이센스

이 프로젝트는 MIT 라이선스에 따라 라이선스가 부여됩니다. 자세한 내용은 LICENSE 파일을 참조하세요.

## 📞 연락처

- **웹사이트**: [xnomad.ai](https://xnomad.ai)
- **트위터**: [@xNomadAI](https://x.com/xNomadAI)

질문 및 지원은 GitHub 리포지토리에서 이슈를 열어주세요.

xNomad 팀의 ❤️과 함께 개발되었습니다.

## 🙏 감사 인사

이 프로젝트 개발에 기여해주신 모든 분들께 큰 감사를 드립니다.

xNomad 팀의 ❤️과 함께 개발되었습니다.
