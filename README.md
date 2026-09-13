# LIGHT GAME — STAY IN THE LIGHT

光が、きみの武器になる。懐中電灯で影の敵と戦い、鍵を探して夜の廃校から脱出する、見下ろし視点の3Dアクションゲーム。

## プレイ

[GitHub Pagesで遊ぶ](https://yz4git.github.io/light-game/)

iPhone Safariは横画面を推奨。WebGLが無効な環境では同じゲームを軽量Canvas描画で起動します。PCブラウザでもプレイできます。ホーム画面への追加と、初回読み込み後のオフライン起動に対応しています。

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

鍵は各階の最初から拾えます。ミニマップには一度懐中電灯を当てるまで表示されず、発見後は消灯しても場所が残ります。鍵を取って緑色の出口へ進めば、敵を残していてもクリアです。敵の退治はスコアを得るための任意目標です。

全999階。毎階、部屋・通路・障害物・鍵・出口・敵を自動生成します。部屋を通路と回遊路で接続し、障害物を置いても鍵と出口に到達できる配置にしています。5種類の景観が切り替わり、敵の数や強さは上限つきで上昇します。カメラは初版より1.5倍近い表示です。

階をクリアするたびに、未取得の装備強化を1つ選べます。全5種類を取り終えた後も「次の階へ」で進めます。次の階では体力・電池・アイテムを補充。999階から脱出すると最終クリア画面が出ます。

進行とマップ生成用のシードは各階の開始時に端末へ保存されます。「つづきから」とやり直しでは同じ階・同じ配置に戻り、新しく探索を始めると別の迷宮になります。旧版のセーブは階数・装備・スコアを引き継ぎ、自動生成マップへ移行します。

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
- `world.js`: seeded BSP rooms and corridors, connected placements, 999 floors and shared camera zoom
- `geometry.js`: collision, swept movement, visibility and beam intersection
- `scene.js`: Three.js scene, original procedural models, material batching, flashlight cone, particles
- `canvas-view.js`: compatible Canvas renderer using the same generated layout
- `input.js`: independent pointer controls, keyboard, input reset and gesture protection
- `main.js`: title, pause, HUD, map, save, upgrades and ending
- `save.js`: saved run validation and migration
- `clear-screen.js`: upgrade selection and guarded next-floor action
- `audio.js`: user-enabled Web Audio music and effects

`npm test` で戦闘・鍵の発見と回収・敵を残した脱出・強化取得後の階移動・セーブ移行を検証し、999階すべての配置の到達可能性を確認します。

## ビジュアル

添付イメージを参考に、建物・主人公・影の敵・廃車・草木をオリジナルの立体モデルとして制作しています。床と壁の配置はゲーム内の衝突判定・ミニマップと同じ生成データから描画します。

音声は初期OFF。セーブは端末内のみ。Service Workerはプレイ中の自動再読み込みを行いません。
