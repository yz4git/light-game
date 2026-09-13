# LIGHT GAME — STAY IN THE LIGHT

光が、きみの武器になる。懐中電灯で影の敵と戦い、鍵を探して夜の廃校から脱出する、見下ろし視点の3Dアクションゲーム。

## プレイ

[GitHub Pagesで遊ぶ](https://yz4git.github.io/light-game/)

iPhone Safariは横画面を推奨。PCブラウザでもプレイできます。ホーム画面への追加と、初回読み込み後のオフライン起動に対応しています。

## 操作

| 操作 | iPhone | PC |
| --- | --- | --- |
| 移動 | 左スティック | WASD / 矢印 |
| ライト切替 | てらすをタップ | F |
| 光を当てる | ON中は自動照準 | Spaceを押している間 |
| 手動照準 | てらすボタンをドラッグ | てらすボタンをドラッグ |
| ダッシュ回避 | ダッシュ | Shift |
| 回復キット | 赤い✚ | Q |
| 予備電池 | 黄色い電池 | E |
| 一時停止 | 右上Ⅱ | Escape |

光を当て続けると敵にダメージを与え、移動を遅くできます。壁越しの攻撃は届きません。消灯中は電池が自動回復し、電池切れでも詰まない設計です。赤い予告は敵の攻撃準備。突進を横にかわすと攻撃のチャンスになります。

各エリアで敵をすべて退治すると鍵が現れます。鍵を取って緑色の出口へ進んでください。全3エリア、エリア間の装備強化、最終クリア画面を収録。進行はエリア開始時に端末へ保存され、つづきからはそのエリアの最初から再開します。

## 開発

Node.js 22以降。

```sh
npm install
npm test
npm run build
npm run dev
```

`http://localhost:4173` で起動。`src/` が編集用ソース、`docs/` がコミット対象の本番成果物です。ソース変更後は `npm run build` を実行し、両方を保存してください。Pages workflowは本番成果物を配信します。実行時の外部CDNや画像ダウンロードは不要です。

- `core.js`: 60 Hz simulation, collision, line of sight, navigation flow field, enemy states, battery, stage progression
- `scene.js`: Three.js scene, original procedural models, material batching, flashlight cone, particles
- `input.js`: independent pointer controls, keyboard, input reset and gesture protection
- `main.js`: title, pause, HUD, map, save, upgrades and ending
- `audio.js`: user-enabled Web Audio music and effects

## 初版の範囲

添付イメージを参考に、建物・主人公・影の敵・廃車・草木をオリジナルの立体モデルとして制作しています。写実的な画像そのものをゲーム背景にしているわけではありません。3エリアは同じ廃校の基本構造に、配置・敵構成・難度を変えた構成です。

音声は初期OFF。セーブは端末内のみ。Service Workerはプレイ中の自動再読み込みを行いません。
