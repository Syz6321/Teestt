const DIMENSIONS = [
  {
    name: "言语梳理",
    short: "言语",
    color: "#2a9d8f",
    bridge: "用自己的话把要点收拢",
    blurb: "用阅读、改写和讲述把知识说清楚",
    tiers: {
      high: {
        strength: "在这些情境里，你经常先用读、写、讲来整理新内容。话一旦被你换成自己的说法，理解就会更稳。",
        activities: ["每学完一小节，用自己的话写四五句小结", "把一课内容讲成一段三分钟说明，只留给自己听", "做一个「词语—我的解释」小卡片，专门收容易滑过去的概念"],
        growth: ["讲完或写完后补一个例子，检查有没有只换成顺口的空话", "碰到图表时也写一句图说，让文字和图形互相核对"]
      },
      mid: {
        strength: "阅读、改写和讲述会在一部分情境里成为你的办法，尤其是需要把内容说清楚的时候。它已经能用，只是还不是每次的第一反应。",
        activities: ["每周选一篇材料，把每一段收成一句话", "和同学互相用一分钟讲清一个概念", "听课时只记下准备改写的关键词"],
        growth: ["概括时限定句数，帮助自己留下主干", "若下笔发空，可以先口头说一遍再写"]
      },
      low: {
        strength: "这次作答里，阅读、写作和讲述较少成为你的第一反应。这只说明你更常先用别的入口，并不表示文字这条路不适合你。",
        activities: ["给一页笔记加一句用自己的话写的标题", "把一道题的思路写成四行", "选一段很短的材料，读完只复述两句"],
        growth: ["从说给自己听开始，觉得顺了再写下来", "先练短材料，不必一次面对长文"]
      }
    }
  },
  {
    name: "逻辑推演",
    short: "逻辑",
    color: "#3a7ca5",
    bridge: "把条件和下一步写清楚",
    blurb: "用步骤、条件和因果关系把问题拆开",
    tiers: {
      high: {
        strength: "你较常先看条件、步骤和因果关系。结构清楚之后，细节才更容易留下来。",
        activities: ["把错题拆成「已知、推断、结论」三行", "为一章内容列一条因为所以的链", "用「如果……那么……」检查笔记是否连得上"],
        growth: ["推完回到原题，看有没有例外没被写进去", "可以先留一个粗略猜想，再补步骤，避免一直停在整理条件"]
      },
      mid: {
        strength: "分步骤、找规律、检查对错的时候，你会启用推理。它是一件稳定的工具，但你并不只靠它。",
        activities: ["每天选一道题，先只写步骤", "把同一类题的共同条件整理到一处", "做完后用一句话写出这一步为什么能成立"],
        growth: ["步骤写到第三步就对照一个例子", "推理转不动时，换一张图或一次操作再回来"]
      },
      low: {
        strength: "逐步推理目前较少被你当作开场。你也许更想先看到整体、先动手或先交流，之后再补逻辑也可以。",
        activities: ["给一个结论补两条为什么", "把一次操作过程标成 1、2、3", "只检查错题里断开的那一步"],
        growth: ["从最熟的内容开始拆步骤", "推不出时写下卡在哪一个因为，不必要求自己立刻全懂"]
      }
    }
  },
  {
    name: "图像构建",
    short: "图像",
    color: "#e09f3e",
    bridge: "收成一张一眼能看懂的图",
    blurb: "用图示、颜色和位置整理关系",
    tiers: {
      high: {
        strength: "你较常把信息变成图、颜色、位置和空间关系。能一眼看到的结构，会让你更快进入状态。",
        activities: ["一课留一页只画关系的简图", "用固定颜色区分容易混的概念", "把流程画成从左到右的路径"],
        growth: ["画完用两句话讲出图的主干，确认它不只是好看", "复杂内容先画三个框，再决定要不要加细节"]
      },
      mid: {
        strength: "比较、记位置、内容变杂的时候，图示会帮到你。它可以是整理工具，不必每页都画满。",
        activities: ["只把最容易混的三组做成对照图", "复习前先看自己的图三十秒，再翻书", "给一章选一个能代表结构的符号"],
        growth: ["一张图只表达一种关系", "看图能想起时，合上图讲一遍，避免只记得画面"]
      },
      low: {
        strength: "你目前较少先用图像来学习。不必把自己改成看图才行，从小标记开始就够。",
        activities: ["给三类笔记各固定一种颜色", "把一个过程画成三个方框", "用位置标出审题时最容易漏的地方"],
        growth: ["不追求好看，只追求一眼能找到", "画完对照文字，看有没有漏掉步骤"]
      }
    }
  },
  {
    name: "动手体验",
    short: "动手",
    color: "#e07a5f",
    bridge: "亲手做一小步",
    blurb: "用操作、演示和试一次进入理解",
    tiers: {
      high: {
        strength: "你较常靠操作、演示、走动和试一次来进入学习。身体先动起来时，理解往往跟着清楚。",
        activities: ["能动手试的内容，先做最小的一次再看结论", "边走边复述刚学的三句话", "用纸条在桌上摆出结构，再收成笔记"],
        growth: ["试完写下做了什么、看到什么、这说明什么", "给试错限时，结束就整理，避免一直停在动手"]
      },
      mid: {
        strength: "实验、技能练习或坐久了的时候，动手会成为有效方式。它适合穿插在别的习惯之间。",
        activities: ["每学习一段，起来演示或演算五分钟", "把抽象步骤做成一次小演示", "演算时换一种姿势，帮助自己重新开始"],
        growth: ["动手前写下想验证的一个问题", "做完立刻留一行笔记，把体验收成以后能复习的痕迹"]
      },
      low: {
        strength: "这次你更常直接阅读、思考或讨论，较少把动手当作第一反应。偶尔让手参与，可以为熟悉的内容开一个新入口。",
        activities: ["用手比划一个过程", "做一个很小的纸面模型", "站着把一道步骤题重做一遍"],
        growth: ["从最短的操作开始，做完就停", "把动作和一句很短的说明绑在一起，方便下次回忆"]
      }
    }
  },
  {
    name: "节奏韵律",
    short: "节奏",
    color: "#7b6cc5",
    bridge: "用很短的节奏把重复固定下来",
    blurb: "用声音、节拍和固定时段维持记忆",
    tiers: {
      high: {
        strength: "你较常用声音、节拍、重复和固定时段来记住内容，也用来把自己带回学习。规律的节奏会让开始变得更容易。",
        activities: ["把一组要点收成四拍以内的口诀", "选一段只在复习时播放的短音乐，当成开始信号", "用固定的学习时段和休息时段安排一个下午"],
        growth: ["口诀编完要回看原意，避免只记住声音", "换科目时换一种节奏，减少前后串在一起"]
      },
      mid: {
        strength: "背诵、容易走神或难以开始时，声音和节拍会帮你。它可以只做开关，不必全程开着。",
        activities: ["给开始学习配一段两分钟的固定音乐", "把易错的句子出声读两遍", "用计时而不是情绪来决定这一小段何时结束"],
        growth: ["出声读完，马上默写关键词", "如果音乐让你更散，就改成无声计时或轻敲节拍"]
      },
      low: {
        strength: "你目前较少靠音乐、口诀或固定节拍来学习。这没有高下。若想试，选一个很轻的用法就够。",
        activities: ["把三个术语读成同样的句式", "为一天只设一个固定的开始时间", "复习时用手指轻点节拍，不必出声"],
        growth: ["同一种短节奏先试三天，再决定留不留", "口诀控制在一句以内，并写上它对应的原内容"]
      }
    }
  },
  {
    name: "协作讨论",
    short: "协作",
    color: "#c26d9a",
    bridge: "讲给一个人听",
    blurb: "用讲解、提问和反馈把理解说实",
    tiers: {
      high: {
        strength: "你较常在交流、互相讲解和听到问题的时候，把理解说实。别人的追问往往会照见哪里还虚。",
        activities: ["两个人讲题：一人讲，另一人只提问", "把同一个概念讲给两个不同的人", "在小组里负责说出已经达成的共识"],
        growth: ["讨论前先写下自己的一版看法，避免只跟着气氛走", "讨论后留下三行只属于自己的结论"]
      },
      mid: {
        strength: "卡住、想确认或需要一点外部约束时，你会去找人交流。独自学习仍然可以成立，讨论更像加速器。",
        activities: ["每周约一次十五分钟的互相抽问", "把疑问收成两句话，再决定要不要找人", "请对方听完后只回一个问题"],
        growth: ["一次讨论只解决一个点", "结束后用自己的话重述，确认不是只记住了对方的说法"]
      },
      low: {
        strength: "独立完成目前更常是你的第一反应。合作不是必需的，不过有时一个听众能帮你发现跳过的步骤。",
        activities: ["请人只听你讲两分钟，不必展开长讨论", "参加小组时先负责记录共识", "把问题写成文字发给一个人"],
        growth: ["从请对方提一个问题开始", "选择你觉得安全的对象，时间短一点"]
      }
    }
  },
  {
    name: "内省复盘",
    short: "内省",
    color: "#c47b6b",
    bridge: "用几分钟记下状态和下一步",
    blurb: "用回顾、计划和自我提问调整学法",
    tiers: {
      high: {
        strength: "你较常停下来看自己的状态、目标和哪里其实没懂。这种回头看，会让后面的学习更贴你自己。",
        activities: ["每天用三句结束：学会了什么、卡在哪、明天改一点", "测验后先写自己的状态，再改错题", "订计划时留出一个可以调整的空档"],
        growth: ["复盘限定在五分钟内，避免变成反复责备自己", "每次复盘只留下一个下一步动作"]
      },
      mid: {
        strength: "阶段结束或心情波动时，你会出现反思。这个习惯已经有了，可以把它变得更轻、更固定。",
        activities: ["学习结束只问今天哪一处最不稳", "用每周一次的短回顾代替天天长记", "在计划旁留一行：如果完不成，就改成什么"],
        growth: ["反思写成可以勾选的小动作", "若容易陷进情绪，就改成只记事实和下一个题"]
      },
      low: {
        strength: "你目前较少把看看自己放在学习的第一步，而更想直接进入内容。加一点点回顾，常常能减少重复踩同一个坑。",
        activities: ["在错题旁只标：看错、忘了、不会、太急", "睡前用一分钟回想一个卡点", "周末把这些标记看一遍，圈出重复的那一个"],
        growth: ["先分类，不做自我评价", "一周只处理重复出现的那一类"]
      }
    }
  },
  {
    name: "观察联结",
    short: "观察",
    color: "#6a9a3f",
    bridge: "配上一个真实例子",
    blurb: "用现象、分类和生活场景接住抽象内容",
    tiers: {
      high: {
        strength: "你较常把知识和现象、类别、生活场景连起来。一旦对上真实世界，内容就更有抓手。",
        activities: ["每个重要概念配一个身边看得到的例子", "出去走一走时，收集三个能对上近期学习的现象", "按类别而不是按页码整理一份素材或错题"],
        growth: ["例子要回头核对定义，避免好像像、其实不符合", "分类之后写回课本里的说法，方便和考试用语对接"]
      },
      mid: {
        strength: "内容变抽象或需要记住时，你会去找现实例子和分类。它适合当理解的桥，之后再回到精确表述。",
        activities: ["一章结束列五个生活对照", "用这像什么帮助入门，再用定义收尾", "给一组知识先分成两三堆，再决定堆的名字"],
        growth: ["一个概念先只留一个最准的例子", "分类标准事先写下来，避免越分越散"]
      },
      low: {
        strength: "你目前较少从观察和生活类比进入学习。补一个例子，有时能让抽象内容落地，同时保留你原来的主入口。",
        activities: ["学完一个定义，找一个家里或路上能看见的例子", "把一部分笔记按现象放在一起", "做题时试着说这在现实里相当于什么"],
        growth: ["暂时找不到就写下还没观察到，留空也算完成", "第二天只补一个例子，不要求一次配齐"]
      }
    }
  }
];

const QUESTIONS = [
  { text: "明天有一场小测验，今晚你更可能怎么开始？", options: ["把要考的范围用自己的话收成一张清单", "先排一排这些知识点谁先谁后", "把会的、模糊的、不会的分成三叠纸", "先停一分钟，看自己最没底的是哪一块"] },
  { text: "读到一段绕来绕去的说明，你的第一反应更接近？", options: ["找出条件和结论，把中间缺的一步补上", "画成箭头、对照表或示意图", "出声读两遍，听哪一句不顺", "到生活里找一个能对上的例子"] },
  { text: "周末想弄懂一个新概念，你更愿意？", options: ["先看图解、示意图或一页导图", "找材料，亲手做一次最小尝试", "约同学把各自的理解讲一遍", "找一篇写得清楚的短文来读"] },
  { text: "复习一整章时，你更顺手的做法是？", options: ["做几道需要演算或实际操作的题", "把容易忘的话收成一句顺口的短句", "合上书问自己：真正稳的有哪几处", "顺着推导看，哪一步最容易断"] },
  { text: "有一组内容你总是记混，你更常？", options: ["用同样的节拍把它们分开读", "找人互相抽问，直到能分清", "按现象或使用场景重新归类", "用不同颜色和位置把它们分开摆"] },
  { text: "一节课或一个章节结束，你更想怎样收尾？", options: ["和同伴用几分钟对一下理解", "写下今天的收获，也写下卡点", "把这一课用自己的话完整讲一遍", "再做一道小练习，把过程走顺"] },
  { text: "写作业卡住时，你更常先做哪一件？", options: ["先分辨是没看清、不会，还是太急了", "到身边找一个相似的情况作参照", "把已知条件重新列出来再往下推", "放慢速度，把题目轻声读顺再看"] },
  { text: "笔记又散又多，你更想怎么收拾？", options: ["按主题或生活中的现象重新归堆", "改写成一段自己能读通的话", "收成一张能看到全局的图", "和同学交换笔记，互相补一块"] },
  { text: "读一篇比较长的材料时，你更常？", options: ["每读完一段，就用自己的句子收住", "边读边问：因为什么，所以什么", "边读边圈画、折叠或动手分层", "先读完放下，再回头看自己留下了什么"] },
  { text: "碰到没见过的题型，你更会先？", options: ["和旧题型比一比，条件差在哪里", "在草稿纸上把题目结构画出来", "把可能的步骤念出声，听是否连得上", "先找一道更接近真实情境的相似题"] },
  { text: "小组任务里，你更自然会接过哪一件？", options: ["把大家的想法排成一张图", "负责样品、演示或实际操作", "请每个人把意见说完", "把最后的结论写成一段说明"] },
  { text: "需要把一段内容记住时，哪种更像你会用的？", options: ["边走边记，或用手把过程比划出来", "配上熟悉的旋律，或按固定次数重复", "晚上在心里过一遍，标出还不稳的地方", "先把推导想明白，再记最后的结论"] },
  { text: "周围一吵就很难开始，你更会？", options: ["用一段固定的轻节奏或音乐把自己带进去", "拉上同学，互相守住一小段时间", "换到能看见外面的位置，先把要点按类分开", "把要看的内容收成一张简图放在眼前"] },
  { text: "有人向你请教刚学的内容，你更常怎么做？", options: ["先听对方卡在哪里，再一起往下聊", "借这个机会检查自己是不是真的懂了", "换成更白话的说法，再配一个例子", "拿起手边的东西比划，或当面演示一遍"] },
  { text: "安排下一周学习时，你更在意？", options: ["留出复盘的空档，看计划是否适合自己", "把学习和身边可以观察的事穿插开", "把任务拆成有先后顺序的步骤", "每天留一段开始时间固定的学习"] },
  { text: "看完展览、纪录片，或在外面走了走，你更可能留下什么？", options: ["一组按类别记下的观察", "一段写下来的感受或短评", "一张路线、草图或画面式记录", "一个准备讲给别人听的版本"] },
  { text: "老师或视频讲得很快时，你当下更会？", options: ["先抓关键词，课后补成自己的话", "只记因果关系，细枝末节回头再补", "跟着在纸上演算，或同步做一遍", "先跟住，晚上再问自己漏掉了什么"] },
  { text: "检查答案时，你更信赖哪种做法？", options: ["再推一遍，看步骤有没有接上", "看图、表和版面有没有对不上的地方", "把答案读出来，听上去别扭就再查", "换一个现实中的例子代进去试一试"] },
  { text: "学习一个新工具或新方法，你更常从哪里下手？", options: ["先看界面、流程图或整体地图", "直接试，在出错的地方学会", "找已经会的人，边看边问", "先读一段文字说明"] },
  { text: "学了比较久、开始累的时候，你更想怎样接回状态？", options: ["站起来走一走或伸展一下，再继续", "听一小段熟悉的音乐，并重新计时", "写两句现在的状态，再决定下一步", "做一道步骤清楚的小题，把思路重新串上"] },
  { text: "准备一次口头介绍时，你更会先做？", options: ["按停顿和呼吸把要说的话过一遍", "找一个人试讲，听对方会问什么", "先收集几个真实的例子当材料", "做一页看得清楚的图或卡片"] },
  { text: "和同学看法不一样时，你更常？", options: ["把两边的理由摊开来一起聊", "先单独待一会儿，想自己为什么这样看", "把两种看法写成一段对照说明", "用一个小操作或小实验看哪边更站得住"] },
  { text: "可以自己选择学习内容时，你更容易被什么吸引？", options: ["能帮助自己看清学习方式的主题", "需要观察身边现象、再去做分类的主题", "问题清楚、可以一步步验证的主题", "适合编成口诀、节拍或重复段落的内容"] },
  { text: "到了阶段结束要做总结，你更想留下？", options: ["一份按现象和主题整理过的清单", "一封写给自己的简短学习信", "一张这一阶段的知识地图", "一段和同伴对谈之后记下的要点"] }
];

const LETTERS = ["A", "B", "C", "D"];
const TIER_GLOSS = {
  high: "较常作为第一反应",
  mid: "接近平均，一部分情境会用",
  low: "这次较少作为第一反应"
};

const state = {
  screen: "home",
  index: 0,
  answers: Array(24).fill(null),
  timer: null,
  report: null
};

function optionDims(index) {
  return [0, 1, 3, 6].map((offset) => (index + offset) % 8);
}

function tierOf(score) {
  if (score >= 6) return "high";
  if (score >= 3) return "mid";
  return "low";
}

function scoreOf(answers) {
  const scores = Array(8).fill(0);
  answers.forEach((dim) => {
    if (dim !== null) scores[dim] += 1;
  });
  return scores;
}

function buildReport(scores) {
  const ranked = DIMENSIONS.map((dim, index) => {
    const score = scores[index];
    const tier = tierOf(score);
    return { ...dim, index, score, tier, copy: dim.tiers[tier] };
  }).sort((a, b) => b.score - a.score || a.index - b.index);

  const top = ranked[0];
  const second = ranked[1];
  const third = ranked[2];
  const bottom = ranked[ranked.length - 1];
  const spread = top.score - bottom.score;
  const ties = ranked.filter((dim) => dim.score === top.score);

  let title = `更常借助${top.name}`;
  let detail = "";
  if (spread <= 2) title = "多种习惯比较均衡";
  else if (ties.length >= 3) title = "几项习惯同样常出现";
  else if (ties.length === 2) {
    title = `${ties[0].name}\n${ties[1].name}`;
    detail = "这两项同样常出现";
  }

  const lead = ranked.slice(0, 3).map((dim) => `${dim.name} ${dim.score} 次`).join("、");
  const paragraphs = [];
  if (spread === 0) {
    paragraphs.push("八个习惯都是 3 次。全卷共 24 次选择，平均下来正好每人 3 次，这次没有哪一种明显更常出现。");
  } else {
    paragraphs.push(`按被选中的次数，靠前的是${lead}。全卷共 24 次选择，平均每个习惯 3 次。高于 3 次，只表示它更常成为你的第一反应。`);
  }

  if (spread <= 2) {
    paragraphs.push("前后差距很小。这次更适合看成比较均衡的习惯组合，换一批科目或情境，次序还可能移动。");
  } else if (top.score === second.score) {
    paragraphs.push(`「${top.name}」和「${second.name}」次数相同，不必分出高下。可以有时${top.bridge}，有时${second.bridge}。`);
  } else {
    paragraphs.push(`一个顺手的搭配是：先${top.bridge}，再${second.bridge}。`);
    if (third.score >= 5) {
      paragraphs.push(`「${third.name}」也比较常出现，适合在前两种不太用得上时接上。`);
    }
  }

  const lows = ranked.filter((dim) => top.score - dim.score >= 4 && dim.score <= 2).slice(-2);
  if (lows.length) {
    const names = lows.map((dim) => dim.name).join("、");
    const tip = lows[lows.length - 1];
    paragraphs.push(`${names}在这次里次数少一些。这不是能力结论，只表示它们较少成为第一反应。若想轻轻试一个新入口，可以从「${tip.name}」开始：${tip.copy.activities[0]}。`);
  } else {
    paragraphs.push("各项没有拉开很大的距离。比起针对某一项做弥补，更值得把已经会用的习惯留下一个能复查的痕迹。");
  }

  return {
    title,
    detail,
    paragraphs,
    ranked,
    scores,
    spread,
    actions: ranked.slice(0, 3).map((dim) => ({ name: dim.name, text: dim.copy.activities[0] }))
  };
}

function esc(text) {
  return String(text).replace(/[&<>"]/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));
}

function list(items) {
  return `<ul>${items.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>`;
}

function homeHTML() {
  const dots = DIMENSIONS.map((dim, index) => `<span style="background:${dim.color};--a:${index * 45}deg"></span>`).join("");
  const grid = DIMENSIONS.map((dim) => `<li><i style="background:${dim.color}"></i><div><strong>${esc(dim.name)}</strong><span>${esc(dim.blurb)}</span></div></li>`).join("");
  return `
    <p class="eyebrow">非诊断 · 偏好快照</p>
    <div class="orbit" aria-hidden="true"><b>8</b>${dots}</div>
    <h1>学习习惯测试</h1>
    <p class="lead">24 道生活情境，看看你更常怎样把新内容学会。题目借鉴多元智能的八种路径，只描述学习习惯，不评价智力。</p>
    <ul class="dim-grid">${grid}</ul>
    <button class="primary" type="button" data-action="start">开始探索</button>
    <p class="note">按最近一个月的真实做法来选，而不是按理想状态。每题选最接近的一项，约 4 分钟，可返回修改。</p>
  `;
}

function quizHTML() {
  const question = QUESTIONS[state.index];
  const dims = optionDims(state.index);
  const selected = state.answers[state.index];
  const answered = state.answers.filter((answer) => answer !== null).length;
  const options = question.options.map((text, choice) => {
    const on = selected === dims[choice] ? " selected" : "";
    return `<button class="option${on}" type="button" data-action="pick" data-choice="${choice}"><span class="letter">${LETTERS[choice]}</span><span class="option-text">${esc(text)}</span></button>`;
  }).join("");
  const back = state.index > 0 ? `<button class="ghost" type="button" data-action="back">上一题</button>` : "";
  return `
    <div class="topbar"><span>第 ${state.index + 1} 题 / 共 24 题</span><span>已答 ${answered}</span></div>
    <div class="track" aria-hidden="true"><span style="width:${(answered / 24) * 100}%"></span></div>
    <h2 class="question">${esc(question.text)}</h2>
    <div class="options">${options}</div>
    ${back}
  `;
}

function resultHTML(report) {
  const bars = report.ranked.map((dim) => `
    <div class="bar-row">
      <span>${esc(dim.short)}</span>
      <div class="meter" aria-hidden="true"><i class="avg"></i><span style="width:${(dim.score / 12) * 100}%;background:${dim.color}"></span></div>
      <span>${dim.score}</span>
    </div>
  `).join("");
  const pills = report.ranked.slice(0, 3).map((dim) => `<span class="pill">${esc(dim.name)} ${dim.score}/12</span>`).join("");
  const cards = report.ranked.map((dim) => {
    const diff = dim.score - 3;
    const diffText = diff === 0 ? "与平均持平" : diff > 0 ? `比平均多 ${diff} 次` : `比平均少 ${-diff} 次`;
    const tierName = { high: "高", mid: "中", low: "低" }[dim.tier];
    return `
      <article class="dim-card">
        <div class="dim-head"><h3>${esc(dim.name)}</h3><span class="badge tier-${dim.tier}">${tierName}</span></div>
        <p class="score-line">${dim.score} / 12 次 · ${diffText} · ${TIER_GLOSS[dim.tier]}</p>
        <h4>个人优势</h4>
        <p>${esc(dim.copy.strength)}</p>
        <h4>适合探索的活动</h4>
        ${list(dim.copy.activities)}
        <h4>成长建议</h4>
        ${list(dim.copy.growth)}
      </article>
    `;
  }).join("");
  const actions = report.actions.map((item) => `<li><strong>${esc(item.name)}</strong>：${esc(item.text)}</li>`).join("");

  return `
    <p class="eyebrow">学习习惯测试报告</p>
    <section class="hero" style="--wash:${report.ranked[0].color}33">
      <h1>${esc(report.title).split("\n").join("<br>")}</h1>
      ${report.detail ? `<p class="hero-detail">${esc(report.detail)}</p>` : ""}
      <p class="lead">这是这次 24 道题的偏好快照。它会随科目、压力和时间变化，不能鉴定类型，也不能代替教育评估。</p>
      <div class="pills">${pills}</div>
    </section>
    <section class="panel radar-wrap">
      <h2 class="section-title">八个习惯的分布</h2>
      <canvas id="radar" class="radar" width="320" height="320" aria-label="学习习惯雷达图"></canvas>
      <p class="legend">实线是选择次数，虚线是平均 3 次，单项满分 12 次。</p>
      <div class="bars">${bars}</div>
    </section>
    <section class="panel narrative">
      <h2>这次的组合</h2>
      ${report.paragraphs.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")}
    </section>
    <section class="panel">
      <h2>可以配在一起的三件小事</h2>
      <ol class="action-list">${actions}</ol>
    </section>
    ${cards}
    <section class="panel rules">
      <h2>评分规则</h2>
      <ol>
        <li>八个维度是言语梳理、逻辑推演、图像构建、动手体验、节奏韵律、协作讨论、内省复盘、观察联结。灵感来自多元智能的八种路径，这里只用来描述学习习惯。</li>
        <li>共 24 题，每题 4 个选项，各对应一个不同维度。选中记 1 分，没有对错，也不计总分名次。</li>
        <li>每个维度作为选项出现 12 次，单项满分 12 分。24 次选择平摊后，平均每个维度 3 分。</li>
        <li>6–12 分为高，表示明显高于平均；3–5 分为中，表示在平均附近；0–2 分为低，表示低于平均。低只说明这次较少成为第一反应。</li>
        <li>报告按你的分数调用对应档位的优势、活动和建议，再把靠前的习惯组合成一段个人说明。</li>
        <li>结果不作智力评价，不替代课堂评估、心理测评或医疗诊断。</li>
      </ol>
    </section>
    <button class="ghost" type="button" data-action="revise">修改上一题</button>
    <button class="primary" type="button" data-action="restart">重新开始</button>
  `;
}

function drawRadar(canvas, scores) {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const cssW = canvas.clientWidth || 320;
  canvas.width = Math.round(cssW * dpr);
  canvas.height = Math.round(cssW * dpr);
  const ctx = canvas.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const cx = cssW / 2;
  const cy = cssW / 2;
  const radius = cssW * 0.3;
  const count = 8;
  const pointAt = (index, value) => {
    const angle = -Math.PI / 2 + (index * 2 * Math.PI) / count;
    return [cx + Math.cos(angle) * value, cy + Math.sin(angle) * value];
  };
  const polygon = (value, close) => {
    ctx.beginPath();
    for (let index = 0; index < count; index += 1) {
      const [x, y] = pointAt(index, value(index));
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    if (close) ctx.closePath();
  };

  ctx.clearRect(0, 0, cssW, cssW);
  ctx.lineJoin = "round";
  for (let ring = 1; ring <= 4; ring += 1) {
    polygon(() => (radius * ring) / 4, true);
    ctx.strokeStyle = "#e1ebe6";
    ctx.lineWidth = 1;
    ctx.stroke();
  }
  for (let index = 0; index < count; index += 1) {
    const [x, y] = pointAt(index, radius);
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(x, y);
    ctx.strokeStyle = "#e1ebe6";
    ctx.stroke();
  }
  polygon(() => radius * (3 / 12), true);
  ctx.setLineDash([4, 4]);
  ctx.strokeStyle = "#8aa399";
  ctx.stroke();
  ctx.setLineDash([]);

  polygon((index) => radius * (scores[index] / 12), true);
  ctx.fillStyle = "rgba(31, 138, 112, 0.2)";
  ctx.strokeStyle = "#1f8a70";
  ctx.lineWidth = 2;
  ctx.fill();
  ctx.stroke();

  ctx.font = `${cssW < 340 ? 11 : 12}px "PingFang SC", "Microsoft YaHei", sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  scores.forEach((score, index) => {
    const [x, y] = pointAt(index, radius * (score / 12));
    ctx.beginPath();
    ctx.arc(x, y, 3.5, 0, Math.PI * 2);
    ctx.fillStyle = "#1f8a70";
    ctx.fill();
    const [lx, ly] = pointAt(index, radius + 24);
    ctx.fillStyle = "#24312e";
    ctx.fillText(DIMENSIONS[index].short, lx, ly);
  });
}

function render(options) {
  const app = document.getElementById("app");
  if (state.screen === "home") app.innerHTML = homeHTML();
  if (state.screen === "quiz") app.innerHTML = quizHTML();
  if (state.screen === "result") {
    state.report = buildReport(scoreOf(state.answers));
    app.innerHTML = resultHTML(state.report);
    drawRadar(document.getElementById("radar"), state.report.scores);
  }
  if (!options || options.scroll !== false) window.scrollTo(0, 0);
}

function clearTimer() {
  if (state.timer) {
    clearTimeout(state.timer);
    state.timer = null;
  }
}

function onClick(event) {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const action = button.dataset.action;
  if (action === "start" || action === "restart") {
    clearTimer();
    state.screen = action === "start" ? "quiz" : "home";
    state.index = 0;
    state.answers = Array(24).fill(null);
    state.report = null;
    render();
    return;
  }
  if (action === "back") {
    clearTimer();
    if (state.index > 0) state.index -= 1;
    render();
    return;
  }
  if (action === "revise") {
    clearTimer();
    state.screen = "quiz";
    state.index = 23;
    render();
    return;
  }
  if (action === "pick") {
    state.answers[state.index] = optionDims(state.index)[Number(button.dataset.choice)];
    clearTimer();
    render({ scroll: false });
    const wait = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 260;
    state.timer = setTimeout(() => {
      state.timer = null;
      if (state.index >= 23) state.screen = "result";
      else state.index += 1;
      render();
    }, wait);
  }
}

function assertBank() {
  if (QUESTIONS.length !== 24 || DIMENSIONS.length !== 8) {
    throw new Error("题库或维度数量不正确");
  }
  const counts = Array(8).fill(0);
  QUESTIONS.forEach((question, index) => {
    const dims = optionDims(index);
    if (question.options.length !== 4 || new Set(dims).size !== 4) {
      throw new Error(`第 ${index + 1} 题选项无法对应四个不同维度`);
    }
    dims.forEach((dim) => {
      counts[dim] += 1;
    });
    ["high", "mid", "low"].forEach((tier) => {
      DIMENSIONS.forEach((dim) => {
        const copy = dim.tiers[tier];
        if (!copy.strength || copy.activities.length !== 3 || copy.growth.length !== 2) {
          throw new Error(`${dim.name} 的${tier}档解读不完整`);
        }
      });
    });
  });
  if (counts.some((count) => count !== 12)) {
    throw new Error(`维度出现次数不均衡：${counts.join(",")}`);
  }
  const allFirst = QUESTIONS.map((_, index) => optionDims(index)[0]);
  const flatScores = scoreOf(allFirst);
  if (flatScores.some((score) => score !== 3)) {
    throw new Error("全选第一项时，八个维度应各为 3 分");
  }
  if (buildReport(flatScores).title !== "多种习惯比较均衡") {
    throw new Error("均衡作答的报告标题不正确");
  }
  const verbalHeavy = QUESTIONS.map((_, index) => {
    const dims = optionDims(index);
    return dims.includes(0) ? 0 : dims[0];
  });
  const heavyScores = scoreOf(verbalHeavy);
  if (heavyScores[0] !== 12 || heavyScores.reduce((sum, score) => sum + score, 0) !== 24) {
    throw new Error("言语优先的计分不正确");
  }
  if (!buildReport(heavyScores).title.includes("言语梳理")) {
    throw new Error("言语优先的报告标题不正确");
  }
}

assertBank();

if (typeof document !== "undefined") {
  document.getElementById("app").addEventListener("click", onClick);
  window.addEventListener("resize", () => {
    if (state.screen === "result" && state.report) {
      drawRadar(document.getElementById("radar"), state.report.scores);
    }
  });
  render();
}
