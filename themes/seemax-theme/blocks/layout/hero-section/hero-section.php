<?php

  /**
  * Hero Block Template.
  * @param   array $block The block settings and attributes.
  * @param   string $content The block inner HTML (empty).
  * @param   bool $is_preview True during AJAX preview.
  * @param   (int|string) $post_id The post ID this block is saved to.
  */

  // Create id attribute allowing for custom "anchor" value.
  $id = 'hero-section-' . $block['id'];
  if( !empty($block['anchor']) ) {$id = $block['anchor'];}
  // Create class attribute allowing for custom "className" and "align" values.
  $className = 'hero-section';
  if( !empty($block['className']) ) {$className .= ' ' . $block['className'];}
  if( !empty($block['align']) ) {$className .= ' align' . $block['align'];}
  // Load values and assing defaults.
  $background = get_field('white_or_blue_background');
  $headline = get_field('headline') ?: strtoupper(get_the_title());
  $headlineCopy = get_field('headline_copy');
  $body = get_field('body');
  $bodyCopy = get_field('body_copy');
  $addButton = get_field('add_a_button');
  $btnLabel = get_field('button_label');
  $btnLabelCopy = get_field('button_label_copy');
  $btnDest = get_field('button_destination');
  $addContact = get_field('add_contact');
?>
<section 
id="<?php echo esc_attr($id); ?>" 
class="<?php echo esc_attr($className);?>
<?php if($background == 'blue'):?> blue-shadow blue-hero<?php else:?> white-shadow<?php endif;?>"
>
<div class="content <?php if($background == 'blue'):?>blue-shadow<?php endif;?>">
    <!-- The Blue Content -->
    <?php if($background == 'blue'):?> 
      <div class="blue-hero-container">
        <?php if(get_field('headline')):?>
          <h1><?php echo $headline; ?></h1>
        <?php endif;?>
        <div class="hr-container"><hr></div>
        <?php if(get_field('body')):?>
          <p><?php echo $body; ?></p>
        <?php endif;?>
      </div>  
    <!-- The White-Back Content -->
    <?php else:?>  
      <?php if($headline):?>
        <h1 class="english-language"><?php echo $headline; ?></h1>
      <?php endif;?>
      <?php if($headlineCopy):?>
        <h1 class="spanish-language"><?php echo $headlineCopy; ?></h1>
      <?php endif;?>
      <div class="hr-container"><hr></div>
      <?php if($body):?>
        <p class="english-language"><?php echo $body; ?></p>
      <?php endif;?>
      <?php if($bodyCopy):?>
        <p class="spanish-language"><?php echo $bodyCopy; ?></p>
      <?php endif;?>
      <?php if($addButton == 'yes'):?>
        <div class="seemax-button">
          <a class="c-block-fill" href="<?php echo $btnDest;?>"></a>
          <span class="english-language"><?php echo $btnLabel;?></span>
          <span class="spanish-language"><?php echo $btnLabelCopy;?></span>
        </div>
      <?php endif;?>
      <?php if($addContact == 'yes'):?>
        <div class="contact-links">
        <div class="single-contact-link c-width-33-3">
            <div class="contact-subtitle">Email</div> 
            <a href="mailto:<?php the_field('email_address', 'option');?>">
              <?php the_field('email_address', 'option');?>
            </a>
          </div>
          <div class="single-contact-link c-width-33-3">
            <div class="contact-subtitle english-language">Phone</div> 
            <div class="contact-subtitle spanish-language">Teléfono</div>
            <a href="tel:<?php the_field('phone_number', 'option');?>">
              <?php the_field('phone_number', 'option');?>
            </a>
          </div>
          <div class="single-contact-link c-width-33-3">
            <div class="contact-subtitle">Fax</div> 
            <a href="tel:<?php the_field('fax_number', 'option');?>">
              <?php the_field('fax_number', 'option');?>
            </a>
          </div>
        </div>
      <?php endif;?>
    <?php endif;?>
  </div>
</section>
