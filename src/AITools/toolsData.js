const toolsData = [
  {
    "name": "ChatGPT",
    "category": "Chatbot",
    "icon": "chatgpt.png",
    "link": "https://chat.openai.com",
    "description": "An advanced AI-powered chatbot by OpenAI."
  },
  {
    "name": "DALL-E",
    "category": "Generative AI",
    "icon": "dalaE.png",
    "link": "https://openai.com/dall-e",
    "description": "AI image generation tool."
  },
  {
    "name": "Jasper",
    "category": "Content Creation",
    "icon": "jasper.png",
    "link": "https://www.jasper.ai",
    "description": "AI writing assistant for creating high-quality content."
  },
  {
    "name": "Grammarly",
    "category": "Writing Assistant",
    "icon": "grammarly.png",
    "link": "https://www.grammarly.com",
    "description": "AI-powered tool for grammar and spell checking."
  },
  {
    "name": "Copy.ai",
    "category": "Marketing",
    "icon": "copyai.png",
    "link": "https://www.copy.ai",
    "description": "Generates marketing copy and content using AI."
  },
  {
    "name": "Lumen5",
    "category": "Video Creation",
    "icon": "lumen5.png",
    "link": "https://www.lumen5.com",
    "description": "AI-driven platform for creating engaging videos."
  },
  {
    "name": "Canva",
    "category": "Design",
    "icon": "canva.png",
    "link": "https://www.canva.com",
    "description": "Graphic design tool with AI-powered features."
  },
  {
    "name": "Hugging Face",
    "category": "Machine Learning",
    "icon": "huggingface.png",
    "link": "https://huggingface.co",
    "description": "Platform for sharing and discovering machine learning models."
  },
  {
    "name": "Craiyon",
    "category": "Image Generation",
    "icon": "craiyon.png",
    "link": "https://www.craiyon.com",
    "description": "Free AI image generator based on text prompts."
  },
  {
    "name": "Synthesia",
    "category": "Video Creation",
    "icon": "synthesia.png",
    "link": "https://www.synthesia.io",
    "description": "AI-powered video creation platform."
  },
  {
    "name": "Runway",
    "category": "Video Editing",
    "icon": "runway.png",
    "link": "https://www.runwayml.com",
    "description": "AI tools for video editing and content creation."
  },
  {
    "name": "Rytr",
    "category": "Writing Assistant",
    "icon": "rytr.png",
    "link": "https://www.rytr.me",
    "description": "AI writing assistant for generating content."
  },
  {
    "name": "Sudowrite",
    "category": "Writing Assistant",
    "icon": "sudowrite.png",
    "link": "https://www.sudowrite.com",
    "description": "AI tool for creative writing assistance."
  },
  {
    "name": "Wordtune",
    "category": "Writing Assistant",
    "icon": "wordtune.png",
    "link": "https://www.wordtune.com",
    "description": "AI-powered writing and editing tool."
  },
  {
    "name": "Vista Social",
    "category": "Social Media Management",
    "icon": "vistasocial.png",
    "link": "https://www.vistasocial.com",
    "description": "AI-driven social media management platform."
  },
  {
    "name": "FeedHive",
    "category": "Social Media Management",
    "icon": "feedhive.png",
    "link": "https://www.feedhive.io",
    "description": "AI-powered social media scheduling and analytics."
  },
  {
    "name": "Midjourney",
    "category": "Image Generation",
    "icon": "midjourney.png",
    "link": "https://www.midjourney.com",
    "description": "AI tool for generating images from text prompts."
  },
  {
    "name": "Canva Magic Studio",
    "category": "Design",
    "icon": "canva.png",
    "link": "https://www.canva.com/magic-studio",
    "description": "AI-powered design tools by Canva."
  },
  {
    "name": "Looka",
    "category": "Design",
    "icon": "looka.png",
    "link": "https://www.looka.com",
    "description": "AI-driven logo and brand design platform."
  },
  //Video Creation tools
  {
      "name": "Canva's AI Video Generator",
      "category": "Video Creation",
      "icon": "canva.png",
      "link": "https://www.canva.com/features/ai-video-generator/",
      "description": "Turn text prompts into AI-generated videos with one click."
    },
    {
      "name": "InVideo AI",
      "category": "Video Creation",
      "icon": "invideo.jpeg",
      "link": "https://invideo.io/make/ai-video-generator/",
      "description": "Generate videos with simple text prompts, including scripts, clips, and voiceovers."
    },
    {
      "name": "Animaker",
      "category": "Video Creation",
      "icon": "animaker.jpeg",
      "link": "https://www.animaker.com/",
      "description": "Online AI animation generator and video maker for studio-quality content."
    },
    {
      "name": "Steve.AI",
      "category": "Video Creation",
      "icon": "steve.png",
      "link": "https://www.steve.ai/",
      "description": "Generate various types of videos, including animation and live-action, from text prompts."
    },
     {
      "name": "Dream Machine",
      "category": "Video Creation",
      "icon": "dreammachine.jpeg",
      "link": "https://lumalabs.ai/dream-machine",
      "description": "Text-to-video model that creates videos based on user prompts or images."
    },
    //Machine Learning tools
      {
        "name": "TensorFlow",
        "category": "Machine Learning",
        "icon": "tensorflow.png",
        "link": "https://www.tensorflow.org",
        "description": "An open-source platform developed by Google for building and deploying machine learning models."
      },
      {
        "name": "PyTorch",
        "category": "Machine Learning",
        "icon": "pytorch.png",
        "link": "https://pytorch.org",
        "description": "An open-source machine learning library developed by Facebook's AI Research lab, known for its dynamic computation graph."
      },
      {
        "name": "Microsoft Azure Machine Learning",
        "category": "Machine Learning",
        "icon": "azure_ml.jpeg",
        "link": "https://azure.microsoft.com/en-us/services/machine-learning/",
        "description": "A cloud-based service from Microsoft that offers a suite of tools for building, training, and deploying machine learning models."
      },
      {
        "name": "Amazon SageMaker",
        "category": "Machine Learning",
        "icon": "sagemaker.jpeg",
        "link": "https://aws.amazon.com/sagemaker/",
        "description": "Amazon's fully managed service that enables developers and data scientists to build, train, and deploy machine learning models at scale."
      },
      {
        "name": "Google Cloud AI Platform",
        "category": "Machine Learning",
        "icon": "gcp_ai.jpeg",
        "link": "https://cloud.google.com/products/ai",
        "description": "Google Cloud's suite of machine learning services that allows users to build, train, and deploy models using Google's infrastructure."
      },
      {
        "name": "IBM Watson Studio",
        "category": "Machine Learning",
        "icon": "watson_studio.jpeg",
        "link": "https://www.ibm.com/cloud/watson-studio",
        "description": "IBM's integrated environment for data scientists, application developers, and subject matter experts to collaboratively and easily work with data."
      },
      {
        "name": "H2O.ai",
        "category": "Machine Learning",
        "icon": "h2o_ai.png",
        "link": "https://www.h2o.ai",
        "description": "An open-source platform that offers a suite of machine learning algorithms and tools for building predictive models."
      },
      //image genration tools
      {
          "name": "DALL·E 2",
          "category": "Image Generation",
          "icon": "dalle2.png",
          "link": "https://openai.com/index/dall-e-2/",
          "description": "An AI system by OpenAI that creates realistic images and art from natural language descriptions."
        },
        {
          "name": "Canva's AI Image Generator",
          "category": "Image Generation",
          "icon": "canva.png",
          "link": "https://www.canva.com/ai-image-generator/",
          "description": "Canva's tool that allows users to create AI-generated images from text prompts."
        },
        {
          "name": "Adobe Firefly",
          "category": "Image Generation",
          "icon": "adobe_firefly.png",
          "link": "https://www.adobe.com/products/firefly/features/text-to-image.html",
          "description": "Adobe's AI image generator that creates images from text descriptions."
        },
        {
          "name": "DeepAI Text-to-Image",
          "category": "Image Generation",
          "icon": "deepai.png",
          "link": "https://deepai.org/machine-learning-model/text2img",
          "description": "A free online AI image generator that transforms text prompts into images."        
        },
        //Search Engine tools        
  {
    "name": "Perplexity AI",
    "category": "AI Search Engine",
    "icon": "perplexity.png",
    "link": "https://www.perplexity.ai",
    "description": "An AI-powered search engine that provides concise answers to user queries by summarizing information from multiple sources."
  },
  {
    "name": "Google AI Overviews",
    "category": "AI Search Engine",
    "icon": "google_ai_overviews.jpeg",
    "link": "https://www.google.com",
    "description": "Google's AI-enhanced search feature that combines traditional search with AI-generated summaries, offering up-to-date information."
  },
  {
    "name": "You.com",
    "category": "AI Search Engine",
    "icon": "you_com.png",
    "link": "https://www.you.com",
    "description": "An AI-powered search engine that offers a personalized and interactive search experience, integrating various AI tools."
  },
  {
    "name": "Consensus",
    "category": "AI Search Engine",
    "icon": "consensus.png",
    "link": "https://consensus.app/home/",
    "description": "An AI-powered academic search engine that helps users find relevant and reliable research papers faster."
  },
  {
    "name": "SearchGPT",
    "category": "AI Search Engine",
    "icon": "searchgpt.png",
    "link": "https://openai.com/index/introducing-chatgpt-search",
    "description": "OpenAI's search engine that combines traditional search features with generative pre-trained transformers (GPT) to generate responses, including citations to external websites."
  },
  //Social Media Management tools
  
  {
    "name": "Buffer",
    "category": "Social Media Management",
    "icon": "buffer.png",
    "link": "https://buffer.com",
    "description": "A user-friendly platform that allows scheduling posts, analyzing performance, and managing multiple social media accounts from a single dashboard."
  },
  {
    "name": "Hootsuite",
    "category": "Social Media Management",
    "icon": "hootsuite.png",
    "link": "https://www.hootsuite.com",
    "description": "Offers comprehensive features including content scheduling, analytics, and team collaboration tools, supporting a wide range of social networks."
  },
  {
    "name": "Zoho Social",
    "category": "Social Media Management",
    "icon": "zoho_social.png",
    "link": "https://www.zoho.com/social/",
    "description": "A social media management tool that helps businesses and agencies grow their presence on social media."
  },
  {
    "name": "SocialPilot",
    "category": "Social Media Management",
    "icon": "socialpilot.png",
    "link": "https://www.socialpilot.co/",
    "description": "Helps easily manage social media accounts, assign roles and permissions, and collaborate on content creation and scheduling."
  },
  {
    "name": "Sendible",
    "category": "Social Media Management",
    "icon": "sendible.png",
    "link": "https://www.sendible.com/",
    "description": "An affordable all-in-one social media management app that nails the basics of scheduling, monitoring, and reporting on social media."
  },
  //video editing tools  
  {
    "name": "Adobe Premiere Pro with Firefly AI",
    "category": "Video Editing",
    "icon": "adobe_firefly.png",
    "link": "https://www.adobe.com/products/premiere/ai-video-editing.html",
    "description": "Adobe's professional video editing software now integrates AI capabilities through the Firefly model, offering features like Generative Extend to seamlessly extend footage and smooth audio edits."
  },
  {
    "name": "Canva's AI Video Editor",
    "category": "Video Editing",
    "icon": "canva.png",
    "link": "https://www.canva.com/video-editor/ai/",
    "description": "Canva's AI-powered video editor allows users to create and edit videos quickly, offering a range of templates and design elements."
  },
  {
    "name": "InVideo AI",
    "category": "Video Editing",
    "icon": "invideo.jpeg",
    "link": "https://invideo.io/make/ai-video-editor/",
    "description": "InVideo AI is an online tool that helps create video drafts by simply entering an idea, streamlining the video creation process."
  },
  {
    "name": "Clipchamp AI Video Editor",
    "category": "Video Editing",
    "icon": "clipchamp_ai.jpeg",
    "link": "https://clipchamp.com/en/ai-video-editing-clipchamp/",
    "description": "Clipchamp offers AI-powered tools to enhance videos, including AI voiceovers, auto subtitles, and background noise removal."
  },
  {
    "name": "LightCut AI Video Editor",
    "category": "Video Editing",
    "icon": "lightcut_ai.png",
    "link": "https://apps.apple.com/us/app/lightcut-ai-video-editor/id1575860488",
    "description": "LightCut is an AI-powered video editing app with templates and effects to create stylish videos and vlogs effortlessly."
  },
  //SEO Optimization tools
  {
    "name": "Surfer SEO",
    "category": "SEO Optimization",
    "icon": "surfer_seo.jpeg",
    "link": "https://surferseo.com/",
    "description": "An AI-powered tool that analyzes top-performing pages to help optimize your content for search engines."
  },
  {
    "name": "HubSpot's AI Tools",
    "category": "Marketing Automation",
    "icon": "hubspot_ai.png",
    "link": "https://www.hubspot.com/products/ai",
    "description": "HubSpot offers a range of AI tools to automate and optimize marketing efforts."
  },
  {
    "name": "Mailchimp's Smart Recommendations",
    "category": "Email Marketing",
    "icon": "mailchimp_ai.png",
    "link": "https://mailchimp.com/features/smart-recommendations/",
    "description": "Mailchimp's AI-driven feature that provides personalized product recommendations to subscribers."
  },
  {
    "name": "ChatGPT for Marketing",
    "category": "Customer Support",
    "icon": "chatgpt.png",
    "link": "https://chat.openai.com/",
    "description": "OpenAI's ChatGPT can be utilized to automate customer interactions and provide personalized responses."
  },
  {
    "name": "Crayon",
    "category": "Competitive Intelligence",
    "icon": "crayon.png",
    "link": "https://www.crayon.co/",
    "description": "An AI-powered competitive intelligence platform that monitors competitors' digital activities."
  },
  {
    "name": "Adext AI",
    "category": "Advertising",
    "icon": "adext_ai.png",
    "link": "https://www.adext.ai/",
    "description": "An AI-driven advertising platform that optimizes ad campaigns across multiple channels."
  },
  
  {
    "name": "SEOpital",
    "category": "SEO Optimization",
    "icon": "seopital.png",
    "link": "https://seopital.com",
    "description": "An AI-powered SEO tool designed to assist professionals and agencies in creating content optimized for search rankings. It leverages real-time web data and algorithms to handle semantic optimization, ensuring effective integration of primary and secondary keywords."
  },
  {
    "name": "SEO.AI",
    "category": "SEO Content Generation",
    "icon": "seoai.jpeg",
    "link": "https://seo.ai",
    "description": "An AI-driven platform that identifies SEO gaps, conducts keyword research, and generates optimized content. It integrates with rank tracking to monitor performance, aiming to enhance website traffic and search engine rankings."
  },
  {
    "name": "Frase",
    "category": "Content Optimization",
    "icon": "frase.png",
    "link": "https://www.frase.io/",
    "description": "A tool that empowers content creators to efficiently produce well-researched, SEO-optimized articles. It streamlines the content creation process, from keyword research to content optimization, enhancing productivity and content quality."
  },  
  {
    "name": "Alli AI",
    "category": "Technical SEO Optimization",
    "icon": "alli.png",
    "link": "https://alli.ai",
    "description": "A platform that automates on-page SEO tasks, including optimizing missing titles, image alt text, external link targets, site speed, and content recommendations. It provides a step-by-step guide to enhance website performance."
  },
  {
    "name": "RankIQ",
    "category": "SEO Content Strategy",
    "icon": "rankiq.png",
    "link": "https://www.rankiq.com",
    "description": "An AI-powered tool that analyzes top-performing content to help users create articles that rank higher in search results. It provides keyword suggestions and content optimization strategies."
  },
  {
    "name": "NeuralText",
    "category": "Content Generation",
    "icon": "neuraltext.jpeg",
    "link": "https://neuraltext.com",
    "description": "An AI tool that assists in generating SEO-optimized content by analyzing top-ranking pages and suggesting improvements. It helps in creating content that aligns with SEO best practices."
  },
  {
    "name": "MarketMuse",
    "category": "Content Strategy",
    "icon": "marketmuse.png",
    "link": "https://www.marketmuse.com",
    "description": "An AI-powered content research and optimization platform that helps in creating content strategies based on competitive analysis and keyword research."
  },
  {
    "name": "Pictory",
    "category": "Visual Content Creation",
    "icon": "pictory.png",
    "link": "https://pictory.ai",
    "description": "An AI tool that assists in creating visual content, such as images and videos, optimized for SEO. It helps in enhancing user engagement and improving search rankings."
  },
  //Audio & Music Transcription tools
  {
    "name": " tldv",
    "category": "Audio & Music Transcription",
    "icon": "tldv.png",
    "link": "https://tldv.io",
    "description": "AI-powered meeting recorder that transcribes calls and generates concise summaries."
  }, 
  {
    "name": "descript",
    "category": "Audio & Music Transcription",
    "icon": "descript.png",
    "link": "https://www.descript.com/?redirect=false",
    "description": "Descript is a versatile video and podcast editor with AI-powered transcription, screen recording, and effects, enabling effortless editing and seamless team collaboration."
},
{
  "name": "Rumi",
  "category": "Audio & Music Transcription",
  "icon": "Rumi.png",
  "link": "https://rumi.ai",
  "description": "Waitroom enhances video meetings with a queue and timer format, boosting collaboration, productivity, and skill development while reducing distractions and fatigue."
},
{
  "name": "Supernormal",
  "category": "Audio & Music Transcription",
  "icon": "Supernormal.png",
  "link": "https://www.supernormal.com",
  "description": "Supernormal is a data-driven platform for asynchronous video updates, using AI to summarize and keep teams connected without meetings or time zone conflicts."
}, {
  "name": "Otter AI",
  "category": "Audio & Music Transcription",
  "icon": "Otterai.png",
  "link": "https://otter.ai",
  "description": "Otter AI records and transcribes meetings with high accuracy, creating searchable notes in real time and integrating seamlessly across iOS, Android, and Chrome."
},
{
  "name": "Laxis ",
  "category": "Audio & Music Transcription",
  "icon": "Laxis.png",
  "link": "https://www.laxis.com",
  "description": "Laxis AI Writer helps content creators transform audio from podcasts, webinars, and meetings into blogs, newsletters, and social posts effortlessly with AI."
}, 
{
  "name": "Beyond",
  "category": "Audio & Music Transcription",
  "icon": "beyond.png",
  "link": "https://www.beeyondai.com",
  "description": "Beeyond AI offers AI-driven solutions across content, art, marketing, education, fitness, and music, simplifying complex tasks with ease."
},
{
  "name": " Fireflies",
  "category": "Audio & Music Transcription",
  "icon": "firefiles.png",
  "link": "https://fireflies.ai",
  "description": "Fireflies.ai is an AI-driven conversation intelligence tool that enhances collaboration by tracking speaker talk time, sentiment, monologues, and key meeting metrics."
}, 
{
"name": "Airgram",
  "category": "Audio & Music Transcription",
  "icon": "ai.png",
  "link": "https://easywithai.com/",
  "description": "Airgram integrates with Zoom, Google Meet, and Teams, offering collaborative agendas, task assignments, rich-text editing, and multilingual transcription for seamless meeting management."
},
{
  "name": "riverside",
  "category":"Audio & Music Transcription",
  "icon": "riverside.png",
  "link": "https://riverside.fm",
  "description": "Riverside’s AI Transcription accurately transcribes audio and video in 100+ languages, offering speaker detection, format support, editing tools, and free downloads."
}
, {
  "name": "zeemo",
  "category": "Audio & Music Transcription",
  "icon": "zeemo.png",
  "link": "https://zeemo.ai/",
  "description": "Zeemo is the ideal captioning tool for videos, improving accessibility and streamlining your workflow to reach a broader audience." 
},
{
  "name": "whisper jax",
  "category": "Audio & Music Transcription",
  "icon": "whisper jax.png",
  "link": "https://huggingface.co/spaces/sanchit-gandhi/whisper-jax",
  "description": "Hugging Face is a community-driven platform for machine learning, providing models, datasets, and tools to foster AI innovation. It enables collaboration, model sharing, and discovery, with open-source resources and enterprise solutions for enhancing machine learning workflows." 
},
{
  "name": "wave",
  "category": "Audio & Music Transcription",
  "icon": "wave.png",
  "link": "https://wave.co",
  "description": "Wave is an AI-powered app for recording, transcribing, and summarizing audio, designed to simplify note-taking during meetings and calls."
}, {
  "name": "waas",
  "category": "Audio & Music Transcription",
  "icon": "github.png",
  "link": "https://github.com/schibsted/WAAS?utm_source=listedai",
  "description": "WAAS is perfect for developers and audio enthusiasts who seek flexibility and high-quality audio. Leverage OpenAI Whisper’s capabilities with WAAS for superior functionality."
}, {
  "name": "voxqube",
  "category": "Audio & Music Transcription",
  "icon": "voxqube.png",
  "link": "https://www.voxqube.com/",
  "description": "Voxqube is an AI-driven tool that offers quick dubbing services for YouTube videos, helping users expand their reach into new global markets with multiple language options."
},
{
  "name": "vowel ai",
  "category": "Audio & Music Transcription",
  "icon": "ai.png",
  "link": "https://www.vowel.com",
  "description": "Vowel AI is a cutting-edge platform that automates meeting summaries with AI, helping users save time and improve coordination through emojis, texts, and bookmarks."
},
{
  "name": "voicify",
  "category": "Audio & Music Transcription",
  "icon": "jammable.png",
  "link": "https://www.jammable.com",
  "description": "Voicify is an AI-powered music platform enabling users to quickly create high-quality covers, offering a wide selection of artists and customization options."
},
{
  "name": "voicepen ai",
  "category": "Audio & Music Transcription",
  "icon": "voicepen.png",
  "link": "https://voicepen.ai/",
  "description": "VoicePen AI uses artificial intelligence to effortlessly transform audio content like webinars, podcasts, and tutorials into written blog posts."
},
{
  "name": "Vocol AI",
  "category": "Audio & Music Transcription",
  "icon": "vocol.png",
  "link": "https://www.vocol.ai/",
  "description": "A voice collaboration tool that enhances teamwork through AI-powered transcription, making communication seamless and efficient."
},
{
  "name": "VN Split",
  "category": "Audio & Music Transcription",
  "icon": "vocol.png",
  "link": "https://www.vocol.ai/",
  "description": "AI-powered tool for summarizing voice notes in 50+ languages while ensuring privacy on messaging platforms like WhatsApp and iMessage."
},
{
  "name": "Videodub",
  "category": "Audio & Music Transcription",
  "icon": "videodub.png",
  "link": "https://videodub.io/",
  "description": "AI-driven video translation and voiceover tool for content creators, educators, and businesses, enhancing accessibility and engagement worldwide."
},
{
  "name": "Video2Text",
  "category": "Audio & Music Transcription",
  "icon": "video2text.png",
  "link": "https://github.com/",
  "description": "AI-powered tool using OpenAI Whisper to transcribe videos into text with high accuracy for seamless content conversion."
},
{
  "name": "UniScribe",
  "category": "Audio & Music Transcription",
  "icon": "uniscribe.png",
  "link": "https://www.uniscribe.co/",
  "description": "AI-powered transcription and translation tool for converting audio and video content into text quickly and efficiently."
},
{
  "name": "TuneFlow",
  "category": "Audio & Music Transcription",
  "icon": "tuneflow.png",
  "link": "https://tuneflow.com/",
  "description": "AI-driven digital audio workstation (DAW) for music creators, offering advanced tools for efficient and creative music production."
},
{
  "name": "TubeOn AI",
  "category": "Audio & Music Transcription",
  "icon": "tubeon.png",
  "link": "https://tubeonai.com/",
  "description": "AI-powered tool summarizing YouTube videos and podcasts into concise insights, delivering key information within 30 seconds for efficient content consumption."
},
{
  "name": "Traq.AI",
  "category": "Audio & Music Transcription",
  "icon": "traqai.png",
  "link": "https://www.traq.ai",
  "description": "AI-driven conversation intelligence platform for sales teams, analyzing calls, extracting insights, and improving strategies through automated transcription and data analysis."
},
{
  "name": "TransMonkey",
  "category": "Audio & Music Transcription",
  "icon": "transmonkey.png",
  "link": "https://www.transmonkey.ai/",
  "description": "AI-powered translation software supporting 130+ languages, instantly converting documents, images, and videos while ensuring contextual accuracy in translations."
},
{
  "name": "Transcript LOL",
  "category": "Audio & Music Transcription",
  "icon": "transcriptlol.png",
  "link": "https://transcript.lol",
  "description": "Advanced AI transcription tool for videos, audio files, and meetings, providing accurate and efficient speech-to-text conversion effortlessly."
},
{
  "name": "Transcribe Audio",
  "category": "Audio & Music Transcription",
  "icon": "transcriptlol.png",
  "link": "https://www.transcribeaudio.io",
  "description": "Automated transcription service converting speech to text from various audio formats, ideal for interviews, meetings, and content creation."
},
{
  "name": "ToastyAI",
  "category": "Audio & Music Transcription",
  "icon": "toastyai.png",
  "link": "https://outcast.ai",
  "description": "AI-powered tool for podcast creators, generating transcripts, show notes, timestamps, and blog content efficiently from podcast episodes."
},
{
  "name": "Tipp",
  "category": "Audio & Music Transcription",
  "icon": "tipp.png",
  "link": "https://www.tipp.so",
  "description": "AI platform converting articles and newsletters into personalized audio podcasts for convenient, on-the-go content consumption."
},
{
  "name": "TIMZ Flowers",
  "category": "Audio & Music Transcription",
  "icon": "timzflowers.png",
  "link": "https://timz.flowers",
  "description": "AI-powered meeting platform integrating video conferencing and asynchronous collaboration to enhance team productivity and efficiency."
},
{
  "name": "Thundercontent",
  "category": "Audio & Music Transcription",
  "icon": "thundercontent.png",
  "link": "https://thundercontent.com",
  "description": "AI writing assistant generating high-quality, unique articles efficiently, streamlining content creation for writers and businesses."
},
{
  "name": "TalkNotes",
  "category": "Audio & Music Transcription",
  "icon": "talknotes.png",
  "link": "https://talknotes.io",
  "description": "AI-powered tool converting voice memos into structured written content, supporting over 50 languages for efficient transcription."
},
{
  "name": "Tailor by Threads",
  "category": "Audio & Music Transcription",
  "icon": "threads.png",
  "link": "https://www.threads.net",
  "description": "AI tool summarizing chat messages, generating action items, and enhancing productivity with customized prompts and call summarization."
},
{
  "name": "Swell",
  "category": "Audio & Music Transcription",
  "icon": "swell.png",
  "link": "https://www.swellai.com",
  "description": "AI-powered content creation tool for podcasters, automating transcription, editing, and SEO-friendly content production."
},
{
  "name": "SuperMemos",
  "category": "Audio & Music Transcription",
  "icon": "supermemos.png",
  "link": "https://supermemos.ai",
  "description": "iOS voice memo app leveraging AI for easy organization, transcription, and searchability of personal memos and recordings."
},
{
  "name": "SumlyAI",
  "category": "Audio & Music Transcription",
  "icon": "sumly.png",
  "link": "https://www.sumly.ai",
  "description": "AI tool generating concise summaries of podcasts and delivering them directly to users’ inboxes for easy consumption."
},
{
  "name": "StoryMage",
  "category": "Audio & Music Transcription",
  "icon": "storymage.png",
  "link": "https://www.storymage.ai",
  "description": "AI-powered tool converting podcast transcripts into LinkedIn posts and blogs, streamlining content creation for podcasters and businesses."
},
{
  "name": "Spotalike",
  "category": "Audio & Music Transcription",
  "icon": "spotalike.png",
  "link": "https://spotalike.com/en",
  "description": "AI-powered music discovery tool creating personalized Spotify playlists based on users’ favorite tracks and artists."
},
{
  "name": "SpeechGenerator",
  "category": "Audio & Music Transcription",
  "icon": "speechgenerator.png",
  "link": "https://speechgenerator.co",
  "description": "AI tool assisting users in generating personalized, high-quality speeches for various occasions efficiently."
},
{
  "name": "SpeakAI",
  "category": "Audio & Music Transcription",
  "icon": "speakai.png",
  "link": "https://speakai.co",
  "description": "AI-powered transcription, analysis, and data visualization platform trusted by researchers, marketers, and businesses for extracting insights."
},
{
  "name": "Sonix",
  "category": "Audio & Music Transcription",
  "icon": "sonix.png",
  "link": "https://sonix.ai",
  "description": "AI-driven automated transcription software offering fast, accurate transcription with a wide range of features."
},
{
  "name": "Sonify",
  "category": "Audio & Music Transcription",
  "icon": "sonify.png",
  "link": "https://www.sonify.io/",
  "description": "AI-powered platform merging audio and data to develop innovative audio-first solutions for enhanced user engagement."
},
{
  "name": "SongsLikeX",
  "category": "Audio & Music Transcription",
  "icon": "ai.png",
  "link": "https://songslikex.com",
  "description": "AI tool generating personalized playlists of similar songs based on users' favorite tracks for continuous music discovery."
},
{
  "name": "SolidPoint",
  "category": "Audio & Music Transcription",
  "icon": "solidpoint.png",
  "link": "https://solidpoint.ai",
  "description": "AI-powered tool summarizing lengthy content into key points, enhancing reading efficiency and information retention."
},
{
  "name": "Salina",
  "category": "Audio & Music Transcription",
  "icon": "salina.png",
  "link": "https://salina.app",
  "description": "AI-driven transcription and translation platform for podcasters, enabling seamless global content distribution."
},
{
  "name": "Rythmex",
  "category": "Audio & Music Transcription",
  "icon": "rythmex.png",
  "link": "https://rythmex.com",
  "description": "AI-powered online transcription tool offering advanced editing features for accurate and efficient audio-to-text conversion."
}
    ]
export default toolsData;