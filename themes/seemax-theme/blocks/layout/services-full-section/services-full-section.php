<?php

  /**
  * Hero Block Template.
  * @param   array $block The block settings and attributes.
  * @param   string $content The block inner HTML (empty).
  * @param   bool $is_preview True during AJAX preview.
  * @param   (int|string) $post_id The post ID this block is saved to.
  */

  // Create id attribute allowing for custom "anchor" value.
  $id = 'services-full-section-' . $block['id'];
  if( !empty($block['anchor']) ) {$id = $block['anchor'];}
  // Create class attribute allowing for custom "className" and "align" values.
  $className = 'services-full-section';
  if( !empty($block['className']) ) {$className .= ' ' . $block['className'];}
  if( !empty($block['align']) ) {$className .= ' align' . $block['align'];}
  // Load values and assing defaults.
  $background = get_field('white_or_blue_background');
  $headline = get_field('headline') ?: strtoupper(get_the_title());
  $body = get_field('body');
  $addButton = get_field('add_a_button');
  $btnLabel = get_field('button_label');
  $btnDest = get_field('button_destination');
  $addContact = get_field('add_contact');
?>
<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className);?>">
  <div class="content">
    <?php $featured_posts = get_field('single_services_full');?>
      <?php if( $featured_posts ): ?>
        <?php foreach( $featured_posts as $featured_post ):?>
          
            
          <?php $title = get_the_title( $featured_post->ID );?>
          <?php $image = get_field('service_image', $featured_post->ID );?>
          <?php $description = get_field('service_description', $featured_post->ID );?>
          
          <?php $titleStrip = str_replace(' ', '', $title);?>
          <?php $titleClean = strtolower(preg_replace('/&#[0-9]+;/', '', $titleStrip));?>

          
          <div class="single-full-service">
          <div class="service-anchor" id ="<?php echo $titleClean;?>"></div>
            <div class="service-info-area">
              <div class="white-shadow full-service-text-half c-width-58">
                <h2><?php echo $title;?></h2>  
                <p><?php echo $description;?></p>
                <div class="seemax-button">
                  <a class="c-block-fill" data-estimate="<?php echo $title;?>" href="#estimate"></a>
                  <span>Get Estimate</span>
                </div>
              </div>
              
              <div class="full-service-image-half c-width-60">
                <img src="<?php echo $image['url'];?>" alt="<?php echo $image['alt'];?>">
              </div>
            </div>

            <?php if( have_rows('service_faqs', $featured_post->ID ) ):?>
              <div class="faq-section faqSection">
              <h3><?php echo $title;?> FAQs</h3>  
                <?php while( have_rows('service_faqs', $featured_post->ID ) ) : the_row();?>
                  <?php $question = get_sub_field('faq_question', $featured_post->ID );?>
                  <?php $answer = get_sub_field('faq_answer', $featured_post->ID );?>
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
              </div>
            <?php endif;?>
            
          </div>            
            
        <?php endforeach; ?>
        </ul>
    <?php endif; ?>
  </div>
</section>
