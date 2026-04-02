export interface BitacoraArticle {
  id: string
  title: string
  excerpt: string
  category: 'Bienestar' | 'Neurociencia' | 'Liderazgo' | 'Sentido'
  readTime: string
  content: string
}

export const bitacoraArticles: BitacoraArticle[] = [
  {
    id: 'agotamiento',
    title: 'El agotamiento de viejas estructuras de hacer y ser',
    excerpt: 'Cuando funcionar ya no alcanza y el sistema interno pide actualización: menos piloto automático, más diseño.',
    category: 'Bienestar',
    readTime: '4 min de lectura',
    content: `
      <span class="section-tag" style="color:var(--rosa);">Bienestar</span>
      <h1 class="bitacora-article-title">El agotamiento de viejas estructuras de hacer y ser</h1>
      <div class="bitacora-prose">
        <p style="font-size:1.5rem; font-style:italic; color:var(--texto-light); margin-bottom:3rem;">Cuando funcionar ya no alcanza</p>
        <p>Hay un tipo de cansancio que no se resuelve durmiendo. No es el cansancio físico del que te recuperás en un fin de semana. Es el agotamiento de repetir estructuras que alguna vez funcionaron, pero que ya no te representan.</p>
        <p>Se manifiesta como desgano, irritabilidad, sensación de estar "haciendo lo que toca" en lugar de lo que importa. Como si el piloto automático hubiera tomado el control y vos estuvieras mirando desde afuera.</p>
        <p>Desde la psicología del comportamiento, este fenómeno se conoce como rigidez psicológica: la tendencia a seguir respondiendo de la misma manera aunque los resultados ya no sean los esperados. Es la antítesis de la adaptabilidad.</p>
        <blockquote>"El problema no es que estés cansado. El problema es que estás cansado de algo que ya no te nutre. Y eso requiere otro tipo de respuesta."</blockquote>
        <p>La neurociencia muestra que los patrones de comportamiento se automatizan precisamente porque funcionaron: el cerebro es eficiente y prefiere los caminos conocidos. Pero esa misma eficiencia puede convertirse en una trampa cuando el contexto cambia.</p>
        <p>La buena noticia es que la conciencia es el punto de partida. Cuando podés observar el patrón, ya no sos solo el patrón. Y desde ahí, podés empezar a diseñar algo diferente.</p>
        <p style="text-align:center; font-family:'Cormorant Garamond', serif; font-size:1.8rem; font-style:italic; margin:2rem 0;">Conciencia no es conocimiento. Es presencia activa ante lo que sucede.</p>
        <p>El cambio real no comienza con grandes decisiones. Comienza con pequeñas interrupciones del automático: una pausa, una pregunta, una elección diferente. Con el tiempo, esas micro-interrupciones reconstruyen estructuras más adaptadas.</p>
        <blockquote>"No se trata de abandonar quién eras. Se trata de actualizar quién podés ser."</blockquote>
        <p>El agotamiento, bien leído, puede ser una señal de evolución. Tu sistema interno diciéndote que ya creció de ese formato. Que necesita más espacio, más conciencia, más diseño intencionado.</p>
        <p style="font-weight:700; margin-top:4rem; border-top:1px solid #eee; padding-top:2rem;">Reflexión final: ¿Qué estructura interna ya no te representa y podrías actualizar esta semana?</p>
      </div>
    `
  },
  {
    id: 'sentido',
    title: 'La carencia de sentido que muchas veces no sabemos nombrar',
    excerpt: 'Cuando todo "está bien", pero algo no encaja: cómo reconstruir significado desde microdecisiones.',
    category: 'Sentido',
    readTime: '5 min de lectura',
    content: `
      <span class="section-tag" style="color:var(--amarillo-hover);">Sentido</span>
      <h1 class="bitacora-article-title">La carencia de sentido que muchas veces no sabemos nombrar</h1>
      <div class="bitacora-prose">
        <p style="font-size:1.5rem; font-style:italic; color:var(--texto-light); margin-bottom:3rem;">Cuando todo "está bien" pero algo no encaja</p>
        <p>No siempre la falta de sentido se siente como tristeza. A veces no duele de forma explícita. Se manifiesta como una sensación de vacío liviano pero persistente. Una especie de "esto debería alcanzarme… pero no me alcanza".</p>
        <p>Podés tener trabajo, estabilidad económica, vínculos saludables, incluso reconocimiento. Desde afuera, todo parece ordenado. Y sin embargo, internamente algo no termina de resonar. Esa experiencia es más común de lo que parece.</p>
        <p>La psicología positiva define el sentido (meaning) como la percepción de que lo que hacemos está conectado con algo más grande que nosotros mismos. Martin Seligman incluye el sentido como uno de los cinco pilares del bienestar en el modelo PERMA. Sin sentido, incluso el logro pierde profundidad.</p>
        <blockquote>"El problema es que la carencia de sentido no siempre es evidente. A veces aparece como desmotivación difusa, irritabilidad o sensación de estar 'haciendo lo que toca' en lugar de 'hacer lo que importa'."</blockquote>
        <p>Desde la Teoría de la Autodeterminación, el sentido se fortalece cuando se satisfacen tres necesidades psicológicas básicas: autonomía, competencia y conexión. Si no elegís lo que hacés, no sentís que crecés o no te sentís parte de algo, la energía interna disminuye.</p>
        <p>Muchas personas intentan resolver esta sensación agregando objetivos: más cursos, más proyectos. Pero si no están alineados con los valores personales, el vacío solo se desplaza.</p>
        <p>El sentido no aparece en teorías abstractas. Aparece cuando los valores se ponen en acción concreta. Muchas veces el sentido se construye más que se encuentra. Se construye en microdecisiones diarias que reflejan coherencia.</p>
        <p style="text-align:center; font-family:'Cormorant Garamond', serif; font-size:1.8rem; font-style:italic; margin:2rem 0;">Coherencia es cuando lo que hacés conversa con lo que valorás.</p>
        <p>También es importante entender que el sentido puede cambiar con el tiempo. Lo que era significativo a los 25 puede no serlo a los 40. La carencia de sentido muchas veces es simplemente desactualización interna. No es que no tengas propósito; es que quizás usás uno que ya no te representa.</p>
        <blockquote>"No se trata de encontrar sentido como quien encuentra un objeto perdido. Se trata de construir sentido como quien construye una práctica."</blockquote>
        <p>El sentido no se mide por la magnitud de la acción, sino por la alineación interna. Una pregunta poderosa es: <strong>Si nadie estuviera mirando, ¿seguiría haciendo esto?</strong> Esa pregunta suele revelar si la motivación es autónoma o controlada.</p>
        <p style="font-weight:700; margin-top:4rem; border-top:1px solid #eee; padding-top:2rem;">Reflexión final: ¿Qué pequeño ajuste podrías hacer esta semana para vivir con 10% más coherencia?</p>
      </div>
    `
  },
  {
    id: 'exito',
    title: 'El loop de éxito externo sin disfrute interno',
    excerpt: 'Metas, logro, vacío, meta. Cómo sostener ambición sin perder vitalidad: éxito con coherencia.',
    category: 'Bienestar',
    readTime: '3 min de lectura',
    content: `
      <span class="section-tag" style="color:var(--rosa);">Bienestar</span>
      <h1 class="bitacora-article-title">El loop de éxito externo sin disfrute interno</h1>
      <div class="bitacora-prose">
        <p style="font-size:1.5rem; font-style:italic; color:var(--texto-light); margin-bottom:3rem;">Cuando el logro no alcanza</p>
        <p>Objetivo. Esfuerzo. Logro. Y luego… una sensación de vacío. Este patrón se repite en culturas orientadas al rendimiento, donde el éxito es la métrica principal y el "siempre más" es la norma.</p>
        <p>Durante un tiempo, esa lógica funciona. El logro activa el sistema de recompensa del cerebro. Pero la neurociencia describe la adaptación hedónica: el cerebro se acostumbra rápido a las recompensas y necesitamos el próximo hito para volver a sentir impulso.</p>
        <blockquote>"Si el único motor es la validación externa, entramos en un circuito de dependencia del próximo resultado. Desde afuera somos exitosos; desde adentro, el disfrute es ausente."</blockquote>
        <p>En el modelo PERMA, el logro es solo una de las cinco dimensiones del bienestar. Sin emociones positivas, relaciones significativas, sentido y compromiso genuino, el éxito pierde profundidad. No se trata de abandonar la ambición, sino de integrarla con coherencia.</p>
        <p>La pregunta clave no es "¿puedo lograrlo?", sino "¿quiero lograrlo por las razones correctas?". El disfrute no es un premio final; es un indicador intermedio de alineación. El cerebro no aprende a disfrutar por acumulación de metas, sino por práctica de presencia.</p>
        <p style="text-align:center; font-family:'Cormorant Garamond', serif; font-size:1.8rem; font-style:italic; margin:2rem 0;">La ambición integrada busca crecimiento sin sacrificar identidad.</p>
        <p>Introducí micro-espacios de disfrute consciente: celebrá avances parciales, registrá aprendizajes y reconocé contribuciones. La recuperación no es opcional; el rendimiento sostenido requiere ciclos de activación y descanso.</p>
        <blockquote>"Si el proceso es significativo, el resultado se vuelve consecuencia. El éxito deja de ser identidad y pasa a ser expresión de valores y crecimiento."</blockquote>
        <p style="font-weight:700; margin-top:4rem; border-top:1px solid #eee; padding-top:2rem;">Reflexión final: ¿Mi éxito me está expandiendo o me está drenando?</p>
      </div>
    `
  },
  {
    id: 'reaccionar',
    title: 'La diferencia entre reaccionar y elegir',
    excerpt: 'Entre estímulo y respuesta hay un espacio. Entrenarlo cambia tus vínculos y tu paz.',
    category: 'Neurociencia',
    readTime: '4 min de lectura',
    content: `
      <span class="section-tag" style="color:var(--violeta-soft);">Neurociencia</span>
      <h1 class="bitacora-article-title">La diferencia entre reaccionar y elegir</h1>
      <div class="bitacora-prose">
        <p style="font-size:1.5rem; font-style:italic; color:var(--texto-light); margin-bottom:3rem;">El espacio invisible que cambia tu vida</p>
        <p>Entre estímulo y respuesta hay un espacio. Esa frase resume la capacidad de elegir cómo responder. No siempre elegimos lo que sucede, pero podemos entrenar cómo reaccionamos.</p>
        <p>Cuando te sentís desafiado o presionado, el cerebro activa un sistema de detección de amenazas en milisegundos. Reaccionar es automático. Elegir es entrenado. La diferencia cambia trayectorias de relaciones y liderazgo.</p>
        <blockquote>"La corteza prefrontal puede modular la respuesta emocional si tiene tiempo suficiente. Ese tiempo es el espacio invisible. Entrenar regulación es ampliar ese margen."</blockquote>
        <p>La reinterpretación cognitiva consiste en cambiar el significado que asignamos a una situación antes de actuar. "Me están atacando" puede pasar a ser "Esto es información". La narrativa modifica la respuesta fisiológica.</p>
        <p style="text-align:center; font-family:'Cormorant Garamond', serif; font-size:1.8rem; font-style:italic; margin:2rem 0;">Elegir no es reprimir. Es regular.</p>
        <p>Un líder reactivo genera miedo; uno regulado genera seguridad psicológica. Cuando la respuesta es regulada, la seguridad se fortalece.</p>
        <blockquote>"No controlamos estímulos externos. Controlamos nuestras conductas. La autonomía interna es mayor de lo que creemos."</blockquote>
        <p>Cada elección consciente fortalece el músculo de la regulación. Reaccionar es instintivo. Elegir es evolutivo. En ese pequeño espacio invisible se define nuestra paz interna.</p>
        <p style="font-weight:700; margin-top:4rem; border-top:1px solid #eee; padding-top:2rem;">Reflexión final: ¿En qué situación de esta semana podrías ampliar ese espacio entre estímulo y respuesta?</p>
      </div>
    `
  },
  {
    id: 'autoobservacion',
    title: 'El poder de la autoobservación y la autocorrección',
    excerpt: 'Observar sin juicio, ajustar sin culpa. El circuito del crecimiento real basado en feedback interno.',
    category: 'Liderazgo',
    readTime: '3 min de lectura',
    content: `
      <span class="section-tag" style="color:var(--verde);">Liderazgo</span>
      <h1 class="bitacora-article-title">El poder de la autoobservación y la autocorrección</h1>
      <div class="bitacora-prose">
        <p style="font-size:1.5rem; font-style:italic; color:var(--texto-light); margin-bottom:3rem;">Observar sin juicio, ajustar sin culpa</p>
        <p>La capacidad de observarse a uno mismo —sin caer en la trampa del juicio— es quizás la habilidad más subvalorada del desarrollo personal y profesional.</p>
        <p>La autoobservación no es introspección paralizante ni autocrítica destructiva. Es la capacidad de ver tus propios patrones con la misma claridad con que ves los de los demás. Y desde ahí, ajustar.</p>
        <blockquote>"El que no se observa, no aprende. El que se observa con juicio, tampoco aprende. El aprendizaje real requiere observación neutral y voluntad de ajuste."</blockquote>
        <p>En los sistemas de alto rendimiento, el feedback es continuo. El problema es que muchas personas filtran el feedback externo y tienen muy poco acceso al interno. Desarrollar la autoobservación es instalar un sistema de feedback permanente.</p>
        <p>La autocorrección no implica perfección. Implica agilidad. Poder detectar a tiempo que algo no está funcionando y ajustar la dirección antes de que el impacto sea mayor.</p>
        <p style="text-align:center; font-family:'Cormorant Garamond', serif; font-size:1.8rem; font-style:italic; margin:2rem 0;">Crecer no es no equivocarse. Es equivocarse y aprender más rápido.</p>
        <blockquote>"La madurez no es la ausencia de errores. Es la capacidad de detectarlos, asumir responsabilidad y ajustar sin drama."</blockquote>
        <p>Lo que te observa no sos vos. Es una parte de vos que puede ver al resto. Y esa parte es la que evoluciona.</p>
        <p style="font-weight:700; margin-top:4rem; border-top:1px solid #eee; padding-top:2rem;">Reflexión final: ¿Qué patrón propio podrías observar esta semana sin juzgarlo, solo para entenderlo?</p>
      </div>
    `
  }
]
