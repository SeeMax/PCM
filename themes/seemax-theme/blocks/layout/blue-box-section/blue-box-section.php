<?php

  /**
  * Blue Box Block Template.
  * @param   array $block The block settings and attributes.
  * @param   string $content The block inner HTML (empty).
  * @param   bool $is_preview True during AJAX preview.
  * @param   (int|string) $post_id The post ID this block is saved to.
  */

  // Create id attribute allowing for custom "anchor" value.
  $id = 'blue-box-section-' . $block['id'];
  if( !empty($block['anchor']) ) {$id = $block['anchor'];}
  // Create class attribute allowing for custom "className" and "align" values.
  $className = 'blue-box-section';
  if( !empty($block['className']) ) {$className .= ' ' . $block['className'];}
  if( !empty($block['align']) ) {$className .= ' align' . $block['align'];}
  // Load values and assing defaults.
  $headline = get_field('headline');
  $body = get_field('body');
  $boxHeadline = get_field('box_headline');
  $boxBody = get_field('box_body');
?>
<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className);?> blue-shadow">
  <div class="content">
    <div class="blue-box-text c-width-40">
      <?php if($headline):?>
        <h2 class="h1"><?php echo $headline; ?></h2>
      <?php endif;?>
      <?php if($body):?>
        <p><?php echo $body; ?></p>
      <?php endif;?>
    </div>
    <div class="blue-box-container c-width-60 blue-shadow">
      <?php if($boxHeadline):?>
        <h3><?php echo $boxHeadline;?></h3>
      <?php endif;?>
      <?php if($boxBody):?>
        <p><?php echo $boxBody;?></p>
      <?php endif;?>
    </div>  
  </div>
</section>