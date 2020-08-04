<?php

  /**
  * Hero Block Template.
  * @param   array $block The block settings and attributes.
  * @param   string $content The block inner HTML (empty).
  * @param   bool $is_preview True during AJAX preview.
  * @param   (int|string) $post_id The post ID this block is saved to.
  */

  // Create id attribute allowing for custom "anchor" value.
  $id = 'faq-section-' . $block['id'];
  if( !empty($block['anchor']) ) {$id = $block['anchor'];}
  // Create class attribute allowing for custom "className" and "align" values.
  $className = 'faq-section';
  if( !empty($block['className']) ) {$className .= ' ' . $block['className'];}
  if( !empty($block['align']) ) {$className .= ' align' . $block['align'];}
  // Load values and assing defaults.
?>
<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className);?> faqSection">
  <div class="faqs-anchor" id="faqs-section"></div>
  <div class="content">
    <h2 class="h1"><?php the_field('faq_title');?></h2>
    <?php if( have_rows('faqs_list')):?>            
      <?php while( have_rows('faqs_list') ) : the_row();?>
        <?php $question = get_sub_field('faq_question');?>
        <?php $answer = get_sub_field('faq_answer');?>
        <div class="single-faq white-shadow singleFaq">
          <div class="faq-question faqQuestion">
            <?php echo $question;?>
            <div class="faq-trigger faqTrigger">+</div>
          </div>
          <div class="faq-answer faqAnswer">
            <?php echo $answer;?>
          </div>
        </div>
      <?php endwhile;?>
    <?php endif;?>
  </div>
</section>
