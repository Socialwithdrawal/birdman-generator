    // 上半身データ：画像と対応する言葉
    const topParts = [
      { img: "images/bird_upper_body.png", word: "鳥" },
      { img: "images/Human_upper_body.png", word: "人間" },
      { img: "images/Bear's_upper_body.png", word: "熊" },
      { img: "images/ishiba_upper_body.png", word: "石破茂" }
    ];

    // 下半身データ：画像と対応する言葉
    const bottomParts = [
      { img: "images/bird_lower_body.png", word: "鳥" },
      { img: "images/Human_lower_body.png", word: "人間" },
      { img: "images/Bear's_lower_body.png", word: "熊" },
      { img: "images/ishiba_lower_body.png", word: "石破茂" }
    ];

    // タイトルマッピング（上_下 → タイトル）
    const titles = {
      "鳥_鳥": "鳥",
      "鳥_人間": "鳥人",
      "鳥_熊": "鳥熊",
      "鳥_石破茂": "鳥茂",
      "人間_鳥": "人鳥",
      "人間_人間": "人間",
      "人間_熊": "人熊",
      "人間_石破茂":"人茂",
      "熊_鳥": "熊鳥",
      "熊_人間": "熊人",
      "熊_熊": "熊",
      "熊_石破茂":"熊茂",
      "石破茂_石破茂":"石破茂",
      "石破茂_鳥":"石破鳥",
      "石破茂_人間":"石破人",
      "石破茂_熊":"石破熊",
    };

    // 配列からランダムに1つ選ぶ関数
    function randomPick(array) {
      return array[Math.floor(Math.random() * array.length)];
    }

    function generateBirdman() {
      const top = randomPick(topParts);
      const bottom = randomPick(bottomParts);

      // 上下の言葉をキーにしてタイトルを取得
      const key = `${top.word}_${bottom.word}`;
      const titleText = titles[key] || `${top.word}${bottom.word}`;

      // 画面に反映
      document.getElementById("title").textContent = titleText;
      document.getElementById("top-part").src = top.img;
      document.getElementById("bottom-part").src = bottom.img;
    }

    // 初回生成
    generateBirdman();